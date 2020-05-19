const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer_Info');
const PurchaseOperations= require("../classes/PurchaseOperations");

router.get('/',(req, res, next) => {

    //retrieve query params
    let id = (req.query && req.query.id) ? req.query.id : null;

    let productOp = new PurchaseOperations();

    //find all   
    productOp.getCustomersWithPurchaseInfo (id)
    .then(customers=>{
        if(!customers || customers.length == 0) {
            res.status(404).json({ message: 'Not results!!' });
        }

        //render results
        res.json({status: true, data: customers});        
    })
    .catch(error=>{
        res.status(500).json({ message: error.message });
    });  
});




router.post('/', (req, res) => {
    const customer = new Customer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.bod.phone,
        email: req.body.email,
        balance: req.body.balance,
        segment: req.body.segment,
        purchaseId: req.body.purchaseId,
    });

    try {
        const new_customer = customer.save();
        res.json({status: true, message: "Entry successful"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }

    console.log(req.body)
    
}); 




module.exports = router; 