"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailOnMessage = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const nodemailer = __importStar(require("nodemailer"));
const admin = __importStar(require("firebase-admin"));
admin.initializeApp();
// Gmail credentials (use an App Password)
const gmailUser = "jhondelmico.abas.320401@gmail.com";
const gmailAppPassword = "your-app-password"; // 16 chars
// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailUser,
        pass: gmailAppPassword,
    },
});
// Optional: check transporter
transporter.verify().then(() => console.log("Transporter ready")).catch(console.error);
// Firestore trigger
exports.sendEmailOnMessage = (0, firestore_1.onDocumentCreated)("messages/{messageId}", async (event) => {
    const data = event.data?.data();
    if (!data)
        return console.error("No data found");
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
    }
    catch (error) {
        console.error("Email sending failed:", error);
    }
});
