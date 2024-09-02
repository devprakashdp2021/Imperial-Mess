const mongoose = require("mongoose");

const messDailyExpenseSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    items: {
      type: [
        {
          id: Number,
          name: String,
          price: Number,
          quantity: Number,
        },
      ],
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { timestamps: true }
);

//Method to add new information to the array
messDailyExpenseSchema.methods.addInformation = function (newInfo) {
  this.items.push(newInfo);
  this.totalAmount += newInfo.price * newInfo.quantity;
  return this.save();
};

const MessDailyExpense = mongoose.model(
  "MessDailyExpense",
  messDailyExpenseSchema
);

module.exports = MessDailyExpense;
