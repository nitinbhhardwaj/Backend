import express from 'express';
import products from './products.json' with { type: 'json' };

const app = express();

app.use(express.json());

// GET: get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET: get product by id
app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id == req.params.id);

    res.json(product);
});

// POST: create a new product
app.post('/products', (req, res) => {

    const product = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        brand: req.body.brand
    };

    products.push(product);

    res.json(product);
});

// PUT: update a product
app.put('/products/:id', (req, res) => {

    let product = products.find(p => p.id == req.params.id);

    product.name = req.body.name;
    product.category = req.body.category;
    product.price = req.body.price;
    product.stock = req.body.stock;
    product.brand = req.body.brand;

    res.send("Product updated successfully");
});

// DELETE: delete a product
app.delete('/products/:id', (req, res) => {

    products = products.filter(p => p.id != req.params.id);

    res.send("Product deleted successfully");
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});