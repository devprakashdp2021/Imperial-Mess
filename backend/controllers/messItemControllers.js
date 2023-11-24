const asyncHandler = require("express-async-handler");
const MessItem = require("../models/messItem");

const AddMessItem = asyncHandler(async (req, res) => {
  const messItem = await MessItem.findOne({ itemName: req.body.itemName });
  if(messItem){
    //update messItem information array for already existing messItem
    messItem.addInformation({
      date: req.body.information[0].date,
      quantity: req.body.information[0].quantity,
      price: req.body.information[0].price,
    })
    
    return res.status(200).send({success:true,message:"Mess Item added successfully"})
  }

  try {
    const newMessItem = new MessItem(req.body);
    await newMessItem.save();
    res.send({
      success: true,
      message: "Mess Item added successfully",
      data: newMessItem,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mess Item not added successfully",
    });
  }
});

const GetMessItem = asyncHandler(async (req, res) => {
  try {
    const item=req.query.itemName;
    const messItem = await MessItem.findOne({ itemName:item});
    console.log(messItem)
    res.send({
      success: true,
      message: "Mess Item fetched successfully",
      data: messItem,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

const RemoveMessItem = asyncHandler(async (req, res) => {
 try{
  //logic to remove the mess item from the messItem collection
  const itemId = req.body.id;
  const messItem = await MessItem.findById(itemId);
  if(!messItem){
    return res.status(404).send({success:false,message:"Mess Item not found"})
  }
  if(messItem.information.length === 1){
    await MessItem.deleteOne({ _id: itemId });
    return res.status(200).send({success:true,message:"Mess Item removed successfully"})
  }else{
    messItem.removeInformation({
      date: req.body.information[0].date,
      quantity: req.body.information[0].quantity,
      price: req.body.information[0].price,
    })
    return res.status(200).send({success:true,message:"Mess Item removed successfully"})
  }

 } catch (error) {
  res.send({
    success: false,
    message: error.message,
  });
 }
});

module.exports = { AddMessItem, GetMessItem, RemoveMessItem};
