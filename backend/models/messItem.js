const mongoose = require("mongoose");

const messItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    information: {
      type: [
        {
          date: String,
          quantity: Number,
          price: Number,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

// Method to add new information to the array
messItemSchema.methods.addInformation = function (newInfo) {
  this.information.push(newInfo);
  return this.save();
};

//Method to remove information from the array
messItemSchema.methods.removeInformation = function (newInfo) {
  this.information.pull(newInfo);
  return this.save();
};

const MessItem = mongoose.model("MessItem", messItemSchema);
module.exports = MessItem;
