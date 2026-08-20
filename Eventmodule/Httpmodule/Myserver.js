//Create my own server using http module
import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("welcome to my server");
    res.write("<h1>hello world</h1>");
    res.end();
});

server.listen(8000, ()=> {
    console.log("Server is running on port 8000");
});
