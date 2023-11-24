const asyncHandler = require("express-async-handler");
const Mess=require("../models/Messmodels");
const {User,validate}=require("../models/user");
const GetHostelMess=asyncHandler(async(req,res)=>{
    try {
        const id=req.params.id;
        const user=await User.findById(id);
        const hostel=user.hostel;
         const mess = await Mess.findOne({hostel:hostel});
        if(!mess){
            let newmess=await new Mess({hostel:hostel}).save();
        }
        const messlist=await Mess.findOne({hostel:hostel}).select({_id:false,createdAt:false,updatedAt:false,hostel:false,__v:false});
        // console.log(messlist);
        res.send({
            success: true,
            message: "Mess fetched successfully",
            data:messlist,
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
        const day=req.body.day;
        console.log(day)
        const mess = await Mess.updateOne(
            { hostel:req.body.hostel },
            { $set: { [day]: req.body.food } }
          );
        res.send({
            success: true,
            message: "Mess Update successfully",
            data:mess,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});
module.exports = {GetHostelMess,UpdateMess};