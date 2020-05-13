const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');
const MainOperations= require("../classes/MainOperations");


router.get('/', (req, res, next) => {
    let mainOp = new MainOperations();
    //let productOp = new ProductOperations();
    //get all orders with customer info
    mainOp.getOrdersWithCustomerInfo()
        .then(purchases=>{
            if(!purchases || purchases.length == 0) {
                res.status(404).json({ message: 'Not results!!' });
            }

            //render results
            res.json({status: true, data: purchases});        
        })
        .catch(error=>{
            res.status(500).json({ message: error.message });
        });

});

router.get('/:name', search, (req, res, next) => {
    res.json({ status: true, data: res.purchases });
});
 

router.post('/', (req, res) => {
    const purchase = new Purchase({
        productId: req.body.productId,
        customerId: req.body.customerId,
        time: req.body.time,
        product_status: req.body.product_status,
        date: req.body.date,
        price: req.body.price,
        quantity: req.body.quantity,
    });

    try {
        const new_purchase = purchase.save();
        res.json({status: true, message: "Entry successful"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}); 


 async function search(req, res, next) {
    try {
        purchases = await Purchase.find({
            productId: {
                $regex: req.params.productId, $options: 'i'
            } 
        });

        if(purchases == null) {
            res.status(404).json({message: ' Purchases Not Found'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }

    res.purchases = purchases;
    next();
} 


module.exports = router;