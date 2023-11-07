const express=require("express");
const {
    RegisterComplaint,
    GetetallComplaint,
    UpdateComplaint
}=require("../controllers/complaintControllers");
const authMiddleware=require("../middlewares/authMiddleware")
const router=express.Router();
router.post("/add-complaint",authMiddleware,RegisterComplaint);
router.get("/get-all-complaint",authMiddleware,GetetallComplaint);
router.post("/delete-complaint",authMiddleware,UpdateComplaint);
module.exports=router;