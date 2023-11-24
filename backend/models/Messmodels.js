const mongoose = require("mongoose");

const messSchema = new mongoose.Schema(
    {
      Monday: {
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"},
      },
      Tuesday: {
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      Wednesday: {
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      Thrusday: {
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      Friday:{
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      Saturday:{
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      Sunday:{
        Breakfast:{type:String,default:"please enter mess item"},
        Lunch:{type:String,default:"please enter mess item"},
        Snack:{type:String,default:"please enter mess item"},
        Dinner:{type:String,default:"please enter mess item"}
      },
      hostel:{
        type:String
      },
    },
    {timestamps: true}
);

const Mess=mongoose.model("mess",messSchema);
module.exports=Mess;