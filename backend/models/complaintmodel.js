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
      required: true,
    },
    vote: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "user",
    },
    downvote: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "user",
    },
    hostel: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("complaints", complaintSchema);
module.exports = Complaint;
