const unblockStudentTemplate = (user) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Unblocked</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Account Unblocked</h1>
        <p>Dear ${user.name},</p>
        <p>Your account has been successfully unblocked. You can now access your account as usual.</p>
        <p>If you have any further questions or need assistance, feel free to reach out.</p>
        <p>Best Regards,<br>Warden Office</p>
    </div>
</body>
</html>

`;

module.exports = unblockStudentTemplate;
