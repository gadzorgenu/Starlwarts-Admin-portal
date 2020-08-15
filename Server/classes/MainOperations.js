const Purchase = require('../models/Purchase');
const Customer = require('../models/Customer_Info');
const Product = require('../models/Product');

class MainOperations{
    constructor(){

    }

    /**
     * Get all orders with customer information
     * @returns Promise
     */

    getOrdersWithCustomerInfo()
    {
        //find all purchase records
        return Purchase.find({},{},{lean:true})
            .then((results)=>
            {
                let bulkPromise = [];

                if(results)
                {
                    //loop through retrieved results
                    for(let i=0; i<results.length; i++){
                        //remove leading and trailing spaces
                        let customerId = results[i].customerId.trim();
                        let productId = results[i].productId.trim();

                        //delete customer id property
                        delete results[i].customerId;

                        //fetch corresponding customers name and add to purchase information
                        let returned = {firstname:1,lastname:1};
                        let prom = Customer.findOne({_id:customerId},returned,{lean:true})
                            .then(info=>{
                                if(info){
                                    //assign firstname,lastname to purchase records
                                    results[i].firstname = info.firstname;
                                    results[i].lastname = info.lastname;    
                                }
                            });

                        //fetch corresponding product  name and add to purchase information
                        let returnedProdInfo = {product_name:1};
                        let prom1 = Product.findOne({_id:productId},returnedProdInfo,{lean:true})
                            .then(info=>{
                                if(info){
                                    //assign product name to purchase records
                                    results[i].product_name = info.product_name;                                    
                                }
                            });
                        bulkPromise.push(prom);
                        bulkPromise.push(prom1);
                    }
                }

                //execute all operations concurrently
                return Promise.all(bulkPromise)
                    .then((finalRes)=>{
                        return results;
                    });            
            })
    }
}

module.exports = MainOperations;
