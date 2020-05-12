const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    productId: {
        type: String,
    },

    customerId: {
        type: String,
    },

    time: {
        type: String,
    },

    product_status: {
        type: String,
        
    },
    date: {
        type:String,
    },

    price: {
        type: String,
    },
    quantity: {
        type: Number
    },

});


module.exports = mongoose.model('Purchase', purchaseSchema);