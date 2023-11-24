const asyncHandler = require("express-async-handler");
const {User,validate}=require("../models/user");
const bcrypt=require("bcrypt");
const authUser = asyncHandler(async (req, res) => {
    const user=await User.findOne({gsuiteid:req.body.gsuiteid});
    if(!user){
        res.status(400).send({success:false,message:"invalid gsuiteid or password"});
    }
    if(user&&!user.isActive){
      res.status(400).send({success:false,message:"Your Account has been blocked! Please contact your warden sir."})
    }
    const validate=await bcrypt.compare(req.body.password,user.password);
    if(!validate){
        res.status(400).send({success:false,message:"invalid gsuiteid or password"});
    }
    const token=user.generateAuthToken();
    user.__v=undefined;
    res.status(200).send({success: true, data:token,message:"wait sign in going"})
  });

  const registerUser = asyncHandler(async (req, res) => {
    const {error} =validate(req.body);
    if(error)return res.status(400).send({success:false,message:error.details[0].message});

    const user=await User.findOne({gsuiteid:req.body.gsuiteid});
    if(user){
       return res.status(403).send({success:false,message:"user with given data already exit"}) 
    }
    const collegename=(req.body.gsuiteid.split("@")[1]).split(".")[0];
    if(collegename!="mnnit"){
      return res.status(400).send({success:false,message:"Please Register with your college mail id"});
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
      // console.log(req.body)
      const user = await User.findById(req.body.userId).select("-password");
      // console.log(user);
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
  const Blockuser=asyncHandler(async (req, res) => {
    try {
      // console.log(req.body)
      const userid=req.params.id;
      const user = await User.findById(userid);
      if(user.isActive){
        user.isActive=false;
      }else{
        user.isActive=true;
      }
      user.save();
      console.log(user);
      res.send({
        success: true,
        message: "User Blocked successfully",
      });
    } catch (error) {
        console.log(error.message);
      res.send({
        success: false,
        message: error.message,
      });
    }
  });
  const GetetallUser=asyncHandler(async(req,res)=>{
    try {
       const id=req.params.id;
      //  console.log(id);
       const user=await User.findById(id);
      //  console.log(user);
      //  console.log(user.hostel);
      const allUser = await User.find({hostel:user.hostel,role:"Student"}).exec();
        res.send({
            success: true,
            message: "User fetched successfully",
            data:allUser,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});
module.exports = {registerUser, authUser,getuser,Blockuser,GetetallUser};