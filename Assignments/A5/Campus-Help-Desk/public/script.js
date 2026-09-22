const form = document.getElementById("requestForm");
const requestsDiv = document.getElementById("requests");

const totalRequests = document.getElementById("totalRequests");
const highPriority = document.getElementById("highPriority");
const categoryCount = document.getElementById("categoryCount");
const requestCount = document.getElementById("requestCount");
const submitButton = document.getElementById("submitButton");

let editId = null;

const getRequests = async () => {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    totalRequests.textContent = requests.length;

    highPriority.textContent = requests.filter(
        request => request.priority === "High"
    ).length;

    const categories = new Set(
        requests.map(request => request.category)
    );

    categoryCount.textContent = categories.size;

    requestCount.textContent =
        `${requests.length} ${requests.length === 1 ? "request" : "requests"}`;

    if (requests.length === 0) {
        requestsDiv.innerHTML = `
            <div class="empty">
                No requests yet. Your first request will appear here.
            </div>
        `;
        return;
    }

    requestsDiv.innerHTML = "";

    requests.slice().reverse().forEach(request => {

        const priorityClass = request.priority.toLowerCase();

        requestsDiv.innerHTML += `
            <div class="request">

                <div class="request-top">
                    <span class="request-category">
                        ${request.category}
                    </span>

                    <span class="request-id">
                        #${request.id}
                    </span>
                </div>

                <h3>${request.studentName}</h3>

                <p class="request-description">
                    ${request.description}
                </p>

                <div class="request-bottom">

                    <div class="request-info">
                        <span>${request.email}</span>

                        <span class="priority ${priorityClass}">
                            ${request.priority}
                        </span>
                    </div>

                    <div class="request-actions">
                        <button onclick="editRequest(${request.id})">
                            Edit
                        </button>

                        <button onclick="deleteRequest(${request.id})">
                            Delete
                        </button>
                    </div>

                </div>

            </div>
        `;
    });
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const requestData = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    if (editId) {

        await fetch(`/api/requests/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        editId = null;

        submitButton.innerHTML = `
            Submit Request
            <span>→</span>
        `;

    } else {

        await fetch("/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
    }

    form.reset();
    getRequests();
});

const deleteRequest = async (id) => {

    const confirmDelete = confirm(
        "Are you sure you want to delete this request?"
    );

    if (!confirmDelete) {
        return;
    }

    await fetch(`/api/requests/${id}`, {
        method: "DELETE"
    });

    getRequests();
};

const editRequest = async (id) => {

    const response = await fetch(`/api/requests/${id}`);
    const request = await response.json();

    document.getElementById("studentName").value = request.studentName;
    document.getElementById("email").value = request.email;
    document.getElementById("category").value = request.category;
    document.getElementById("description").value = request.description;
    document.getElementById("priority").value = request.priority;

    editId = id;

    submitButton.innerHTML = `
        Update Request
        <span>→</span>
    `;

    document.getElementById("formSection").scrollIntoView({
        behavior: "smooth"
    });
};

const scrollToForm = () => {
    document.getElementById("formSection").scrollIntoView({
        behavior: "smooth"
    });
};

getRequests();