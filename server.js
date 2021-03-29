const mongoose =require("mongoose");
//mongodb+srv://new_user31:<new_user31>@clustertrial.ddbte.mongodb.net/<sample_airbnb>?retryWrites=true&w=majority
//DB Config
const express = require ('express');
const db = require('./config/keys').mongoURI;
const app = express();
//Connect to MongoDB
mongoose
    .connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// const Buyer = require("..Goodsle/model/Buyer");
// const Color = require("./Color");
// const Item = require("./Item");
// const ItemType = require("./ItemType");
// const Search = require("./Search");
// const Shop = require("./Shop");
// const Transport = require("./Transport");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));