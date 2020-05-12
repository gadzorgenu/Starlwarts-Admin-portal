const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product_name: {
        type: String,
    },

   brand:{
    type:String,
   },

    price: {
        type: String,
    },
    

});


module.exports = mongoose.model('Product', productSchema);