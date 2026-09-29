import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/files", express.static(path.join(__dirname, "files")));

app.get("/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.filename);
  res.download(filePath);
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});