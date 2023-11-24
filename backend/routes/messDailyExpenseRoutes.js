const express = require("express");
const {
  AddMessDailyExpense,
  GetMessDailyExpense,
} = require("../controllers/messDailyExpenseControllers");
const router = express.Router();
router.post("/add-messDailyExpense", AddMessDailyExpense);
router.get("/get-messDailyExpense", GetMessDailyExpense);

module.exports = router;
