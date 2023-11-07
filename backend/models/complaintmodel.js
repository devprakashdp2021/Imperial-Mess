const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
    {
      complaintType: {
        type: String,
        required: true,
      },
      complaint: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      vote:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"user",
      }
    },
    {timestamps: true}
);

const Complaint=mongoose.model("complaints",complaintSchema);
module.exports=Complaint;