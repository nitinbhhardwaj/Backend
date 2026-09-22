import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/products");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !stock) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5001/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            price: price,
            category: category,
            stock: stock
          })
        }
      );

      const data = await response.json();

      console.log("Added:", data);

      setName("");
      setPrice("");
      setCategory("");
      setStock("");

      getProducts();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(
        `http://localhost:5001/api/products/${id}`,
        {
          method: "DELETE"
        }
      );

      getProducts();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Product Management</h1>
        <p>Manage your products easily</p>
      </div>

      <form className="form" onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button type="submit">
          Add Product
        </button>
      </form>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-info">
              <h3>{product.name}</h3>

              <div className="details">
                <span className="price">
                  ₹{product.price}
                </span>

                <span className="category">
                  {product.category}
                </span>

                <span className="stock">
                  Stock: {product.stock}
                </span>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="empty">
          No products available
        </div>
      )}
    </div>
  );
}

export default App;