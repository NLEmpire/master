const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const ItemTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});
module.exports = ItemType = mongoose.model('ItemType', ItemTypeSchema);