const Purchase = require('../models/Purchase');
const Customer = require('../models/Customer_Info');


class PurchaseOperations{
    constructor(){

    }

    /**
     * Get all customers with purchase date
     * @returns Promise
     */
    getCustomersWithPurchaseInfo()
    {
        //find all customer records
        return Customer.find({},{},{lean:true})
            .then((results)=>
            {
                let bulkPromise = [];

                if(results)
                {
                    //loop through retrieved results
                    for(let i=0; i<results.length; i++){
                        //remove leading and trailing spaces
                        let purchaseId = results[i].purchaseId.trim();
                       

                        //delete product id property
                        delete results[i].purchaseId;

                        //fetch corresponding purchase date and add to customer information
                        let returnedPurchaseDate = {date:1};
                        let purch = Purchase.findOne({_id:purchaseId},returnedPurchaseDate,{lean:true})
                            .then(info=>{
                                if(info){
                                    //assign date to customer records
                                    results[i].date = info.date;
                                       
                                }
                            });                                             
                                                
                        bulkPromise.push(purch);
                       
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

module.exports = PurchaseOperations;
