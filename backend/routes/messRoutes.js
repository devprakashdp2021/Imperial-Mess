const express=require("express");
const {
  UpdateMess,
  RegisterMess,
  GetHostelMess
}=require("../controllers/messController");
const router=express.Router();
router.post("/add-mess",RegisterMess);
router.get("/get-hostel-mess",GetHostelMess);
router.put("/update-mess",UpdateMess);

module.exports = router;