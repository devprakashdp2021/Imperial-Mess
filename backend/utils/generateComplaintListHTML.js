// generateComplaintListHTML.js

const { User } = require("../models/user"); // Adjust the path to your User model as needed

async function generateComplaintListHTML(complaints) {
    let complaintListHTML = `
    <h3>Pending Complaints for ${complaints[0].hostel} Hostel</h3>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Complaint</th>
                <th>Owner</th>
            </tr>
        </thead>
        <tbody>`;

    for (const complaint of complaints) {
        // Fetch user details based on `student_info` (assuming it holds the user ID)
        const user = await User.findById(complaint.owner);
        const userName = user ? user.name : 'Unknown';

        complaintListHTML += `
            <tr>
                <td>${complaint.complaint}</td>
                <td>${userName}</td>
            </tr>`;
    }

    complaintListHTML += `
        </tbody>
    </table>`;
    return complaintListHTML;
}

module.exports = generateComplaintListHTML;
