import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT || "587"),
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

interface UserDataFormat {
  name: string;
  email: string;
  mobile: string;
  role: string;
  ip: string;
}

export async function sendEmail({
  name,
  email,
  mobile,
  role,
  ip,
}: UserDataFormat) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || process.env.MAIL_USER, // sender address
      to: "sssdtutor44@gmail.com",
      subject: "User Data, Enter on website",
      html: `
      <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background-color: #0073e6; color: white; padding: 10px; text-align: left; border: 1px solid #ddd;">Section</th>
      <th style="background-color: #0073e6; color: white; padding: 10px; text-align: left; border: 1px solid #ddd;">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">Mobile</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${mobile}</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Role</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${role}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">IP</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${ip}</td>
    </tr>
  </tbody>
</table>
`,
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
