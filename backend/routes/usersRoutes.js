const express = require("express");
const {
  registerUser,
  authUser,
  getuser,
  Blockuser,
  GetallUser,
  ForgotPassword,
  ResetPassword,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/get-current-user", authMiddleware, getuser);
router.put("/block-user/:id", Blockuser);
router.get("/get-all-user/:id", GetallUser);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password/:id/:token", ResetPassword);
module.exports = router;
