import nodemailer from "nodemailer";
import { env } from "../configs/env.config";
import dotenv from "dotenv";
import transporter from "../configs/nodemailer.config";

dotenv.config();

export const sendEmail = async (subject: string, htmlContent: string) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject,
            html: htmlContent,
        });
    } catch (error) {
        console.error("Email Sending Error:", error);
    }
};

export default transporter;
