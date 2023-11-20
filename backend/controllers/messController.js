const asyncHandler = require("express-async-handler");
const Mess=require("../models/Messmodels");

const RegisterMess = asyncHandler(async (req, res) => {
    try {
        const newMess = new Mess(req.body);
        await newMess.save();
        res.send({
            success: true,
            message: "Mess added successfully",
        })
      } catch (error) {
        res.send({
            success: false,
            message: error.message,
        })
      }
});

const GetHostelMess=asyncHandler(async(req,res)=>{
    try {
        const mess = await Mess.findOne({hostel:req.body.hostel});
        res.send({
            success: true,
            message: "Mess fetched successfully",
            data:mess,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

const UpdateMess=asyncHandler(async(req,res)=>{
    try {
        await Mess.findOneAndUpdate({hostel:req.body.hostel},req.body);
        res.send({
            success: true,
            message: "Mess delete successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

module.exports = {RegisterMess,GetHostelMess,UpdateMess};