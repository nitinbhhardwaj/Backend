//Create my own server using http module
import http from "http";

const server = http.createServer((req, res) => {
    res.write("welcome to my server");
    res.end();
});

server.listen(8000, ()=> {
    console.log("Server is running on port 8000");
});