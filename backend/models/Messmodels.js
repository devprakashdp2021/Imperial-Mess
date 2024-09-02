const mongoose = require("mongoose");
const mealFild = { type: String, default: "please enter mess item" };
const messSchema = new mongoose.Schema(
  {
    Monday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Tuesday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Wednesday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Thrusday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Friday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Saturday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    Sunday: {
      Breakfast: mealFild,
      Lunch: mealFild,
      Snack: mealFild,
      Dinner: mealFild,
    },
    hostel: {
      type: String,
    },
  },
  { timestamps: true }
);

const Mess = mongoose.model("mess", messSchema);
module.exports = Mess;
