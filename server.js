const mongoose =require("mongoose");
//mongodb+srv://new_user31:<new_user31>@clustertrial.ddbte.mongodb.net/<sample_airbnb>?retryWrites=true&w=majority
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const Buyer = require("./Buyer.model");
const Color = require("./Color.model");
const Item = require("./Item.model");
const ItemType = require("./ItemType.model");
const Search = require("./Search.model");
const Shop = require("./Shop.model");
const Transport = require("./Transport.model");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));