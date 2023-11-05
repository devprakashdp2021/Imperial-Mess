const asyncHandler = require("express-async-handler");
const {User,validate}=require("../models/user");
const bcrypt=require("bcrypt");
const authUser = asyncHandler(async (req, res) => {
    const user=await User.findOne({gsuiteid:req.body.gsuiteid});
    if(!user){
        res.status(400).send({message:"invalid gsuiteid or password"});
    }
    const validate=await bcrypt.compare(req.body.password,user.password);
    if(!validate){
        res.status(400).send({message:"invalid gsuiteid or password"});
    }
    const token=user.generateAuthToken();
    user.__v=undefined;
    res.status(200).send({data:token,message:"wait sign in going"})
  });

  const registerUser = asyncHandler(async (req, res) => {
    const {error} =validate(req.body);
    if(error)return res.status(400).send({message:error.details[0].message});

    const user=await User.findOne({gsuiteid:req.body.gsuiteid});
    if(user){
       return res.status(403).send({message:"user with given data already exit"}) 
    }
    const salt=await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword=await bcrypt.hash(req.body.password,salt);
    let newUser=await new User({
        ...req.body,
        password:hashPassword
    }).save();
    newUser.__v=undefined;
    res.status(200).send({success: true, message: "Registration Successfull, Please login"});
  });

  const getuser=asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.body.gsuiteid).select("-password");
      res.send({
        success: true,
        message: "User details fetched successfully",
        data: user,
      });
    } catch (error) {
        console.log(error.message);
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

module.exports = {registerUser, authUser,getuser};