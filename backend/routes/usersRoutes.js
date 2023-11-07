const express=require("express");
const {
    registerUser,
    authUser,
    getuser
}=require("../controllers/userControllers");
const authMiddleware=require("../middlewares/authMiddleware")
const router=express.Router();

router.post("/",registerUser);
router.post("/login",authUser);
router.get("/get-current-user",authMiddleware,getuser)
module.exports=router;