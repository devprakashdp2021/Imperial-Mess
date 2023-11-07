const asyncHandler = require("express-async-handler");
const Complaint=require("../models/complaintmodel");
const RegisterComplaint = asyncHandler(async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        newComplaint.owner=req.body.userId;
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

module.exports = {RegisterComplaint,GetetallComplaint,UpdateComplaint};