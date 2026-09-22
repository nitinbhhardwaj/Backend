import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  const products = JSON.parse(data);

  res.json(products);
});

app.post("/api/products", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  const products = JSON.parse(data);

  const newProduct = {
    id: products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 1,
    name: req.body.name,
    price: Number(req.body.price),
    category: req.body.category,
    stock: Number(req.body.stock)
  };

  products.push(newProduct);

  fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 2)
  );

  res.json(newProduct);
});

app.delete("/api/products/:id", (req, res) => {
  const data = fs.readFileSync("products.json", "utf-8");
  let products = JSON.parse(data);

  const id = parseInt(req.params.id);

  products = products.filter((product) => product.id !== id);

  fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 2)
  );

  res.json({
    message: "Product deleted successfully"
  });
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});