const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
   
    firstname: {
        type: String,
    },

    lastname: {
        type: String,
    },

    address: {
        type: String,
    },
    phone: {
        type: String,
    },

    email: {
        type: String,
    },

    balance: {
        type: String,
    },
    segment: {
        type: String,
    },
    

});


module.exports = mongoose.model('Customer', customerSchema);