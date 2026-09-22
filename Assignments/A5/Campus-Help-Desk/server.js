import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const file = "requests.json";

const readRequests = () => {
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
};

const writeRequests = (requests) => {
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
};

app.get("/api/requests", (req, res) => {
    const requests = readRequests();
    res.json(requests);
});

app.get("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const request = requests.find(r => r.id == req.params.id);

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

app.post("/api/requests", (req, res) => {
    const requests = readRequests();

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);
    writeRequests(requests);

    res.status(201).json(newRequest);
});

app.put("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const index = requests.findIndex(r => r.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[index] = {
        id: requests[index].id,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    writeRequests(requests);

    res.json(requests[index]);
});

app.delete("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const newRequests = requests.filter(r => r.id != req.params.id);

    if (requests.length === newRequests.length) {
        return res.status(404).json({ message: "Request not found" });
    }

    writeRequests(newRequests);

    res.json({ message: "Request deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});