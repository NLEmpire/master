const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const SearchSchema = new Schema ({
    username:{
        type: String,
        required:true
    },
    query:{
        type: String,
        required:true
    },
    is_Baught: {
        type: Boolean,
        required=true
    },
    Location: {
        type: String,
        required=true
    },
    SearchedOn: {
        type: Date,
        required=true
    },
    BaughtOn: {
        type: Date,
        required=true
    }
});
 module.exports = Search = mongoose.model('Search', SearchSchema);