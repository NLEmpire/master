const express = require("express");
const mongoose= require("mongoose");

const router= express.Router();
const ItemModel = mongoose.model("Item")
const ShopModel = mongoose.model("Shop")
const BuyerModel = mongoose.model("Buyer")
const ItemController = require("../../Goodsle/controller/Item.controller");
const item = require("../model/item");


router.post("/save_Item",(req,res)=>{
    const Item = new ItemModel({
        name: req.body.Itemname,
        size: req.body.size,
        price: req.body.price,
        purchasedOn: Date.now()
    });
    const shop = new ShopModel({
        name: req.body.Shopname,
        location: req.body.Shoplocation,
        officeNumber: req.body.officeNumber,
        phonenumber: req.body.Shopphonenumber
    });
    const buyer = new BuyerModel({
        name: req.body.Buyername,
        username: req.body.username,
        phonenumber: req.body.Shopphonenumber,
        location: req.body.Shoplocation
    });
    ItemController.Save_Item(Item,req.body.ItemType,shop,req.body.color,buyer,function(res){
        if(res)
        {
            res.send("success");
        }
        else
        {
            res.send("failure")
        }
    })
})