const fs = require('fs');
//const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;

const model = require('../model/product')
const Product = model.Product;

exports.createProduct = (req,res) => {
   
    const product = new Product(req.body);

    // product.title = 'PhoneX';
    // product.price = 9999;
    // product.rating = 5;
    product.save()
    .then(result => {
     console.log(result)
     res.json(result);
    })
    .catch(error => {
      console.log(error)
      res.json(error);
    });
  
    
}

exports.getProducts = async (req,res) => {
    
     const  products = await Product.find();
    res.json(products);
}

exports.getProduct = async (req,res) => {
    const id = req.params.id;
    const  product = await Product.findById(id);
    res.json(product);
}

exports.putProduct = async (req,res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
    
}

exports.patchProduct = async (req,res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct = async (req,res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

