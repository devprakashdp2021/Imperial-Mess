const express = require("express");
const {
  AddMessItem,
  GetMessItem,
  RemoveMessItem,
} = require("../controllers/messItemControllers");
const router = express.Router();
router.post("/add-messItem", AddMessItem);
router.get("/get-messItem", GetMessItem);
router.delete("/remove-messItem", RemoveMessItem);

module.exports = router;
