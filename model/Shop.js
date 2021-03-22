const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const ShopSchema = new Schema ({
    name: {
        type: String,
        required=true
    },
    officeNumber: {
        type: Int16Array
    },
    phoneNumber: {
        type: Int16Array
    },
    location: {
        type: String
    }
});
 module.exports = Shop = mongoose.model('Shop', ShopSchema);