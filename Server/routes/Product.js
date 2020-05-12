const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', all_products, (req, res, next) => {
    res.json({status: true, data: res.products});
});


router.get('/:name', search, (req, res, next) => {
    res.json({ status: true, data: res.products });
}); 


router.post('/', (req, res) => {
    const product = new Product({
        product_name: req.body.product_name,
        brand: req.body.brand,
        price: req.body.price,
       
    });

    try {
        const new_product = product.save();
        res.json({status: true, message: "Entry successful"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}); 

async function all_products(req, res, next) {
    try {
        products = await Product.find();
        if(products == null) {
            res.status(404).json({ message: 'Not results!!' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.products = products;
    next();
}

 async function search(req, res, next) {
    try {
        products = await Product.find({
            product_name: {
                $regex: req.params.product_name, $options: 'i'
            } 
        });

        if(products == null) {
            res.status(404).json({message: ' Product Items Not Found'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }

    res.products = products;
    next();
} 


module.exports = router;