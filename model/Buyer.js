const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const BuyerSchema = new Schema ({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    phonenumber: {
        type: String,
        required=true
    },
    numberofuploads: {
        type: String,
        required=true
    },
    location: {
        type: String,
        required=true
    }
});
 module.exports = Buyer = mongoose.model('Buyer', BuyerSchema);