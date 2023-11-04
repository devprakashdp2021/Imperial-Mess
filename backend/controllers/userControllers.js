const asyncHandler = require("express-async-handler");
const {User,validate}=require("../models/user");
const bcrypt=require("bcrypt");
const authUser = asyncHandler(async (req, res) => {
    const user=await User.findOne({gsuiteid:req.body.gsuiteid});
    if(!user){
        res.status(400).send({message:"invalid email or password"});
    }
    const validate=await bcrypt.compare(req.body.password,user.password);
    if(!validate){
        res.status(400).send({message:"invalid email or password"});
    }
    const token=user.generateAuthToken();
    user.password=undefined;
    user.__v=undefined;
    res.cookie("access_token",token,{
      httpOnly:true,
    })
    .status(200)
    .send({data:user,message:"wait sign in going"})
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
    newUser.password=undefined;
    newUser.__v=undefined;
    const token=newUser.generateAuthToken();
    res.cookie("access_token",token,{
      httpOnly:true,
    }).status(200).send({data:newUser,message:"account created successfully"});
  });


module.exports = {registerUser, authUser};