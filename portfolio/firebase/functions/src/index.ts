import * as admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as nodemailer from "nodemailer";
import { DocumentSnapshot } from "firebase-admin/firestore";

admin.initializeApp();

// Gmail credentials (use an App Password)
const gmailUser = "jhondelmico.abas.320401@gmail.com";
const gmailAppPassword = "nswt qlbb dbky iqup";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: gmailUser, pass: gmailAppPassword },
});

transporter.verify()
  .then(() => console.log("Transporter ready"))
  .catch(console.error);

// Firestore trigger in asia-southeast1 (v2 syntax)
export const sendEmailOnMessage = onDocumentCreated(
  {
    document: "messages/{messageId}",
    region: "asia-southeast1",  // specify region here
  },
  async (event: { data?: DocumentSnapshot }) => {
    const data = event.data?.data() as { name: string; email: string; message: string };
    if (!data) return console.error("No data found");

    const mailOptions = {
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: "jhondelmico.abas.320401@gmail.com",
      subject: "New Contact Message from Portfolio",
      html: `
        <h2>New Message!</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  }
);
