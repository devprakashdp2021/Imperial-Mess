// cronJobs.js
const cron = require('node-cron');
const asyncHandler = require("express-async-handler");
const Complaint = require("../models/complaintmodel");
const { sendMail } = require('./mailer');
const generateComplaintListHTML=require("./generateComplaintListHTML");
async function fetchComplaintsByHostel(hostelName) {
    const complaints= await Complaint.find({ hostel: hostelName });
    return complaints;
}
function scheduleDailyTask() {
    cron.schedule('00 00 * * *', async() => {
        // console.log('Running function at 23:10 every day');
        RegisterComplaint();
    });
}


const RegisterComplaint = asyncHandler(async (req, res) => {
    try{
        const ChiefWarden={
            Tilak:"himanshuraj200211@gmail.com",
            Tandon:"aghimanshu200211@gmail.com",
            Patel:"himanshuag112002@gmail.com",
            Malviya:"aghimanshugaya123@gmail.com"
        }
        for(const warden in ChiefWarden){
            let complaints = await fetchComplaintsByHostel(warden);
            // console.log(complaints);
            if(complaints.length>0){
                const complaintListHTML = await generateComplaintListHTML(complaints);
                const text="";
                const subject=`Pending Complaints for ${complaints[0].hostel} Hostel`;
                await sendMail(ChiefWarden[warden],subject,text,complaintListHTML);
            }
        }
        console.log('Emails sent successfully.');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
  });

module.exports = { scheduleDailyTask };
