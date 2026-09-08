import express from 'express';

const app = express();
app.use(express.json());

let users = [
    { id: 1, name: "Nitin", email: "nitin@gmail.com" }
];

// GET: fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST: create a new user
app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);
    res.json(user);
});

// PUT: update a user
app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
});

// DELETE: delete a user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted successfully");
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});

//Create a PRODUCT REST API and test all method in THUNDER CLIENT
//work it on approx 100 approx 100 products and test all the methods in THUNDERCLIENT