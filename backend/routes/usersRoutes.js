const express=require("express");
const {
    registerUser,
    authUser,
    getuser,
    Blockuser,
    GetetallUser
}=require("../controllers/userControllers");
const authMiddleware=require("../middlewares/authMiddleware")
const router=express.Router();

router.post("/",registerUser);
router.post("/login",authUser);
router.get("/get-current-user",authMiddleware,getuser)
router.put("/block-user/:id",Blockuser);
router.get("/get-all-user",GetetallUser);
module.exports=router;