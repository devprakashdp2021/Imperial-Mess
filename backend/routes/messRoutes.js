const express=require("express");
const {
  UpdateMess,
  GetHostelMess
}=require("../controllers/messController");
const router=express.Router();
router.get("/get-hostel-mess/:id",GetHostelMess);
router.put("/update-mess",UpdateMess);

module.exports = router;