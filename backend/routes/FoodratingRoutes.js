const express = require("express");
const {
  GetFoodRating,
  AddFoodRating,
} = require("../controllers/FoodRatingController");
const router = express.Router();
router.get("/get-food-rating", GetFoodRating);
router.post("/addfoodrating", AddFoodRating);
module.exports = router;
