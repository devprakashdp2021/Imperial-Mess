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

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .send({ success: false, message: "Failed to send email." });
    } else {
      console.log("Email sent: " + info.response);
      return res
        .status(200)
        .send({ success: true, message: "Email sent successfully!" });
    }
  });
};

module.exports = { sendMail };
