const express=require("express");
const {
    RegisterComplaint,
    GetetallComplaint,
    DeleteComplaint,
    voteComplaint,
    UnvoteComplaint
}=require("../controllers/complaintControllers");
const authMiddleware=require("../middlewares/authMiddleware")
const router=express.Router();
router.post("/add-complaint",authMiddleware,RegisterComplaint);
router.get("/get-all-complaint/:id",authMiddleware,GetetallComplaint);
router.delete("/delete-complaint/:id",authMiddleware,DeleteComplaint);
router.put("/vote/:complaintId",voteComplaint);
router.put("/unvote/:complaintId",UnvoteComplaint);
module.exports=router;