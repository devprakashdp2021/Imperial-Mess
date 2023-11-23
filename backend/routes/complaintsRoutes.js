const express=require("express");
const {
    RegisterComplaint,
    GetetallComplaint,
    UpdateComplaint,
    voteComplaint,
    UnvoteComplaint
}=require("../controllers/complaintControllers");
const authMiddleware=require("../middlewares/authMiddleware")
const router=express.Router();
router.post("/add-complaint",authMiddleware,RegisterComplaint);
router.get("/get-all-complaint",GetetallComplaint);
router.post("/delete-complaint",authMiddleware,UpdateComplaint);
router.put("/vote/:complaintId",voteComplaint);
router.put("/unvote/:complaintId",UnvoteComplaint);
module.exports=router;