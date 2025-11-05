import nodemailer from "nodemailer"

import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const sendMail = async (to, otp) => {
  await transporter.sendMail({
    from: `"Youtube Clone" <${process.env.USER_EMAIL}>`,
    to,
    subject: "🔐 Reset Your Password | OTP Verification",

    html: `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
        </style>
      </head>
      <body style="margin:0; padding:0; font-family: 'Inter', sans-serif; background:#f4f4f4;">
        <div style="max-width:480px; margin:auto; background:#ffffff; border-radius:12px; padding:30px; box-shadow:0 8px 20px rgba(0,0,0,0.10);">

          <h2 style="text-align:center; color:#333;">🔒 Password Reset Request</h2>

          <p style="font-size:15px; color:#555;">
            Hello,
            <br><br>
            We received a request to reset your password. Use the OTP below to continue.
          </p>

          <div style="text-align:center; margin:25px 0;">
            <h1 style="
              font-size:40px;
              background:#4f5bff;
              display:inline-block;
              color:#fff;
              padding:12px 25px;
              border-radius:8px;
              letter-spacing:3px;">
              ${otp}
            </h1>
          </div>

          <p style="font-size:14px; color:#777;">
            ⚠️ <b>This OTP will expire in 5 minutes.</b><br>
            If you did not request this, please ignore this message.
          </p>

          <hr style="margin-top:30px; border:none; height:1px; background:#ddd;">

          <p style="font-size:12px; text-align:center; color:#888;">
            This is an automated email, please do not reply.<br>
            &copy; ${new Date().getFullYear()} Youtube Clone | All rights reserved.
          </p>

        </div>
      </body>
    </html>
    `
  });
};

export default sendMail