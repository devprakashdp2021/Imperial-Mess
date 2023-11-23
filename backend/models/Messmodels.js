const mongoose = require("mongoose");

const messSchema = new mongoose.Schema(
    {
      Monday: {
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Tuesday: {
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Wednesday: {
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Thrusday: {
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Friday:{
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Saturday:{
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      Sunday:{
        Breakfast:{type:String},
        Lunch:{type:String},
        Snack:{type:String},
        Dinner:{type:String}
      },
      hostel:{
        type:String
      },
    },
    {timestamps: true}
);

const Mess=mongoose.model("mess",messSchema);
module.exports=Mess;