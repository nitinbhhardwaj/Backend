const form = document.getElementById("requestForm");
const requestsDiv = document.getElementById("requests");

let editId = null;

const getRequests = async () => {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    requestsDiv.innerHTML = "";

    requests.forEach(request => {
        requestsDiv.innerHTML += `
            <div class="request">
                <h3>${request.category} - ${request.priority}</h3>
                <p><strong>Name:</strong> ${request.studentName}</p>
                <p><strong>Email:</strong> ${request.email}</p>
                <p><strong>Problem:</strong> ${request.description}</p>

                <button onclick="editRequest(${request.id})">Edit</button>
                <button onclick="deleteRequest(${request.id})">Delete</button>
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
};

getRequests();