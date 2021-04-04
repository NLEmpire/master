const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    officeNumber: {
        type: Number
    },
    phoneNumber: {
        type: Number
    },
    location: {
        type: String
    }
});
module.exports = Shop = mongoose.model('Shop', ShopSchema);