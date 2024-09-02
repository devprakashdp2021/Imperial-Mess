const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    foodName: String,
    userRatings: [
      {
        user: String,
        rating: Number,
      },
    ],
  },
  { timestamps: true }
);

const Rating = mongoose.model("rating", RatingSchema);
module.exports = Rating;
