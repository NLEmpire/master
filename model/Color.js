const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const ColorTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hexadecimal: {
        type: String
    }
});
module.exports = ColorType = mongoose.model('Color', ColorTypeSchema);