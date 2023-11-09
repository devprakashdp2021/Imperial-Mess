const asyncHandler = require("express-async-handler");
const Complaint=require("../models/complaintmodel");
const RegisterComplaint = asyncHandler(async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        await newComplaint.save();
        res.send({
            success: true,
            message: "Complaint added successfully",
        })
      } catch (error) {
        res.send({
            success: false,
            message: error.message,
        })
      }
});
const GetetallComplaint=asyncHandler(async(req,res)=>{
    try {
        const complaints = await Complaint.find().populate('owner').sort({createdAt: -1});
        res.send({
            success: true,
            message: "Complaint fetched successfully",
            data:complaints,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});
const UpdateComplaint=asyncHandler(async(req,res)=>{
    try {
        await Complaint.findByIdAndDelete(req.body.complaintId);
        res.send({
            success: true,
            message: "Complaint delete successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});
const voteComplaint=asyncHandler(async(req,res)=>{
    const id=req.body.id;
    console.log(id);
    const complaintId=req.params.complaintId;
    // console.log(complaintId);
    // console.log(id);
    try{
        await Complaint.findByIdAndUpdate(complaintId,{
            $addToSet:{vote:id},
            $pull:{downvote:id}
        })
        res.status(200).send({
            success:true,
            message:"You successfully vote"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        });
    }
});
const UnvoteComplaint=asyncHandler(async(req,res)=>{
    const id=req.body.id;
    const complaintId=req.params.complaintId;
    try{
        await Complaint.findByIdAndUpdate(complaintId,{
            $addToSet:{downvote:id},
            $pull:{vote:id}
        })
        res.status(200).send({
            success:true,
            message:"You successfully unvote"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        });
    }
}); 
module.exports = {RegisterComplaint,GetetallComplaint,UpdateComplaint,voteComplaint,UnvoteComplaint};