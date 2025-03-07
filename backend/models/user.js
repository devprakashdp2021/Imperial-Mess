const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { string } = require("joi");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gsuiteid: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    hostel: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" }
  );
  return token;
};
const validate = (user) => {
  const schema = joi.object({
    name: joi.string().required(),
    gsuiteid: joi.string().required(),
    password: passwordComplexity().required(),
    role: joi.string().required(),
    hostel: joi.string().required(),
  });
  return schema.validate(user);
};
const User = mongoose.model("user", userSchema);
module.exports = { User, validate };
