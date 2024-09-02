const asyncHandler = require("express-async-handler");
const Rating = require("../models/FoodRatingmodel");
const { User, validate } = require("../models/user");

const AddFoodRating = asyncHandler(async (req, res) => {
  try {
    const user = req.body.id;
    const foodname = req.body.foodname;
    const rating = req.body.rating;
    console.log(user);
    console.log(typeof user);
    console.log("reached add food rating api");
    let foodRating = await Rating.findOne({ foodName: foodname });
    console.log(foodRating);
    if (!foodRating) {
      // If the food doesn't exist, create a new entry
      foodRating = new Rating({
        foodName: foodname,
        userRatings: [{ user: user, rating: rating }],
      });
    } else {
      // If the food already exists, add the user rating to the array
      const existingUserRating = foodRating.userRatings.find(
        (ur) => ur.user === user
      );

      if (existingUserRating) {
        existingUserRating.rating = rating;
      } else {
        foodRating.userRatings.push({ user, rating });
      }
    }

    await foodRating.save();
    res.send({
      success: true,
      message: "Rating added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
const GetFoodRating = asyncHandler(async (req, res) => {
  try {
    const { foodName, user } = req.query;
    const foodRating = await Rating.findOne({ foodName });
    if (foodRating) {
      const userRating = foodRating.userRatings.find((ur) => ur.user === user);
      if (userRating) {
        res.send({
          success: true,
          message: "Rating fetch successfully",
          data: userRating,
        });
      } else {
        res.send({
          success: true,
          message: "Rating fetch successfully",
          data: 0,
        });
      }
    } else {
      res.send({
        success: true,
        message: "Rating fetch successfully",
        data: 0,
      }); // No rating found for the specified food
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = { AddFoodRating, GetFoodRating };
