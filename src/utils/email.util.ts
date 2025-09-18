import nodemailer from "nodemailer";
import { env } from "../configs/env.config";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
    },
});

export const sendEmail = async (subject: string, htmlContent: string) => {
    try {
        console.log(process.env.EMAIL_PASS, 'jj');
        await transporter.sendMail({
            from: env.EMAIL_USER,
            to: env.EMAIL_USER,
            subject: "hii",
            html: htmlContent,
        });
    } catch (error) {
        console.error("Email Sending Error:", error);
    }
};

export default transporter;
