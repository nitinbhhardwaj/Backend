import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url == "/home") {
        res.statusCode = 200;
        res.end(`
            <h1>Computer Science Department</h1>
            <p>Welcome to the Computer Science Department.</p>
            <a href="/home">Home</a>
            <a href="/about">About</a>
        `);
    }
    else if (req.url == "/about") {
        res.statusCode = 200;
        res.end(`
            <h1>About Computer Science Department</h1>
            <p>This department teaches programming, computer science and software development.</p>
            <a href="/home">Home</a>
            <a href="/about">About</a>
        `);
    }
    else {
        res.statusCode = 404;
        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you requested does not exist.</p>
            <a href="/home">Go to Home</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});