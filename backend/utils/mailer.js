const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.adminUsername,
    pass: process.env.adminPassword,
  },
});

const sendMail = async (mail, subject, text, html) => {

  var mailOptions = {
    from: process.env.adminUsername,
    to: mail,
    subject: subject,
    text: text,
    html: html
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Failed to send email. Please try again later.");
  }
};

module.exports = { sendMail };
