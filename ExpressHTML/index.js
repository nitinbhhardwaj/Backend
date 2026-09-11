import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    fs.readFile('./pages/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
            return;
        }
        res.send(data);
    });
});

app.get('/about', (req, res) => {
    fs.readFile('./pages/about.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
            return;
        }
        res.send(data);
    });
});

app.get('/contact', (req, res) => {
    fs.readFile('./pages/contact.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
            return;
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});