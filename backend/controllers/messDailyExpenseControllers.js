const asyncHandler = require("express-async-handler");
const MessDailyExpense = require("../models/messDailyExpense");

const AddMessDailyExpense = asyncHandler(async (req, res) => {
  console.log(req.body);
  const messDailyExpense = await MessDailyExpense.findOne({
    date: req.body.date,
  });
  if (messDailyExpense) {
    //update messItem information array for already existing messItem
    messDailyExpense.addInformation({
      id: req.body.items[0].id,
      date: req.body.date,
      quantity: req.body.items[0].quantity,
      price: req.body.items[0].price,
      totalAmount: req.body.totalAmount,
    });

    return res
      .status(200)
      .send({
        success: true,
        message: "Mess Daily Expense added successfully",
      });
  }

  try {
    const newMessDailyExpense = new MessDailyExpense(req.body);
    await newMessDailyExpense.save();
    res.send({
      success: true,
      message: "Mess Daily Expense added successfully",
      data: newMessItem,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mess Daily Expense not added successfully",
    });
  }
});

const GetMessDailyExpense = asyncHandler(async (req, res) => {
  try {
    const messDailyExpense = await MessDailyExpense.findOne({
      date: req.body.date,
    });
    res.send({
      success: true,
      message: "Mess Daily Expense fetched successfully",
      data: messDailyExpense,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = { AddMessDailyExpense, GetMessDailyExpense };
