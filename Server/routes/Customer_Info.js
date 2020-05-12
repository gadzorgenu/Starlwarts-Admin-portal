const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer_Info');


router.get('/',(req, res, next) => {
    //find all   
    //console.log("getting");
    Customer.find()
        .then(customers=>{
            if(customers == null) {
                res.status(404).json({ message: 'Not results!!' });
            }                    

            res.json({status: true, data:customers});                
        })
        .catch(err=>{
            res.status(500).json({ message: err.message });
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