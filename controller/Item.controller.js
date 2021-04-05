const Item = require('../model/Item');
const ItemType = require('../model/ItemType');
const Shop = require('../model/Shop');
const Color= require('../model/Color');
const Buyer = require('../model/Buyer');

let Save_Item = function(itemP,titleP,shopP,colorP,buyerP,callback)//'p' represent parameters
{
    //get item type id from table
    ItemType.findOne({title:titleP},(err,itemtyp)=>{
        if(!err)
        {//item type exists 
            res.send(" item type found");
        }
        else
        {//item type doesnt exist
            var itemtype = new ItemType({title: titleP,});
            
            itemtype.save()
                    .then(()=>{ 
                        res.send("new ItemType registered ");
                    }).catch((err)=>{
                        res.send("failure registering new ItemType");
                        callback(false);
                    })
        }
        itemP.type = itemtyp.id;
    })
    //get shop location of current item
    Shop.findOne({location:shopP.location, name:shopP.name},(err,shop)=>{
        if(!err)
        {//location exists
            res.send("location found ");
        }
        else
        {//location doesnt exist
            // var shop = new Shop({
            //     location: shopP.location,
            //     name:shopP.name,
            //     officeNumber:shopP.officeNumber,
            //     phonenumber:shopP.phonenumber});
            
            shopP.save()
                .then(()=>{
                res.send("new location registered ");})
                .catch((err)=>{
                    res.send("failure registuring new location");
                    callback(false);
                    })
        }
        itemP.location = shop.id;
    })
    //get color of current item
    Color.findOne({name:colorP},(err,color)=>{
        if(!err)
        {//color exists
            res.send("color found");
        }
        else
        {//color doesnt exist
            var color = new Color({name:colorP,});

            color.save()
                .then(()=>{            
                    res.send("new color saved");})
                    .catch((err)=>{
                        res.send("failure registuring new location");
                        callback(false);
                        })
        }
        itemP.color = color.id;                   
    })
    //get buyer of current item
    Buyer.findOne({username: buyerP.username},(err,buyer)=>{
        if(!err)
        {//buyer exists
            res.send("buyer found");
            Buyer.findOneAndUpdate({username: buyerP.username},{numberOfUploads:numberOfUploads++});
        }
        else
        {//buyer doesnt exist
            // var buyer = new Buyer({
            //     name: buyerP.name,
            //     username: buyerP.username,
            //     phonenumber: buyerP.phonenumber,
            //     numberOfUploads: 1,
            //     location: buyerP.location});

                buyerP.save()
                    .then(()=>{
                        res.send("new buyer registered");})
                        .catch((err)=>{
                            res.send("failure registuring new location");
                            callback(false);
                            })
        }
        itemP.purchasedBy = buyer.id;           
    })

    //save item
    itemP.save()
        .then(()=>{callback(true);})
        .catch((err)=>{
            res.send("failure registuring Item");
            callback(false);
            })
}

module.exports = {
    Save_Item
}