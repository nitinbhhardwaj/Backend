import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app=express();

app.use(cors());
app.use(express.json());

//GET
app.get('/products',(req,res)=>{
    const data=fs.readFile("product.json","utf-8");
    const products=JSON.parse(data);
    res.json(products);
});

//POST
app.post('/products',(req,res)=>{
    const data=fs.readFile("product.json","utf-8");
    const products=JSON.parse(data);
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        category:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    }
    products.push(newProduct);
    fs.writeFile("product.json",JSON.stringify(products),()=>{
        
    });
    res.json({message:"Product added successfully"});
});

app.listen(4000,()=>{

})

