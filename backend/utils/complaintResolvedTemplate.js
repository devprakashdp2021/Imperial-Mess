const complaintResolvedTemplate = (complaint) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Complaint Resolved</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
              color: #4CAF50;
          }
          p {
              line-height: 1.6;
          }
          .footer {
              margin-top: 20px;
              text-align: center;
              font-size: 12px;
              color: #777;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Complaint Resolved</h2>
          <p>Dear ${complaint.owner.name},</p>
          <p>We are pleased to inform you that your complaint has been resolved. Below are the details of your complaint:</p>
          <p><strong>Complaint Type:</strong> ${complaint.complaintType}</p>
          <p><strong>Complaint:</strong> ${complaint.complaint}</p>
          <p><strong>Description:</strong> ${complaint.description}</p>
          <p><strong>Hostel:</strong> ${complaint.hostel}</p>
          <p>If you have any further concerns, please don't hesitate to reach out.</p>
          <p>Thank you for bringing this to our attention.</p>
          <div class="footer">
              <p>&copy; 2024 Imperial Mess. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

module.exports = complaintResolvedTemplate;
