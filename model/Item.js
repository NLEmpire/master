const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ItemType",
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        required: true
    },
    purchasedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer",
        required: true
    },
    purchasedOn: {
        type: Date,
        required: true
    }
});
module.exports = Item = mongoose.model('Item', ItemSchema);
