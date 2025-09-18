import { inject, injectable } from "inversify";
import { IUserService } from "../interfaces/IUser.service";
import { IContactData } from "../../models/interfaces/IContact-data";
import { sendEmail } from "../../utils/email.util";

@injectable()
export class UserService implements IUserService {
    constructor() { }

    async postContactData(contactData: IContactData): Promise<void> {

        const emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                <div style="text-align: center; padding-bottom: 15px; border-bottom: 2px solid #4CAF50;">
                    <h2 style="margin: 0; color: #4CAF50;">📩 New Contact Form Submission</h2>
                    <p style="margin: 5px 0; font-size: 14px; color: #777;">You received a new message from your app</p>
                </div>

                <div style="padding: 15px; text-align: left; color: #333;">
                    <p><strong>👤 Name:</strong> {{name}}</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:{{email}}" style="color:#4CAF50;">{{email}}</a></p>
                    <p><strong>📝 Message:</strong></p>
                    <div style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-top: 5px; font-size: 14px; line-height: 1.6; color: #444;">
                        {{message}}
                    </div>
                </div>

                <div style="text-align: center; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
                    <p>— ORBIT App Contact System</p>
                </div>
            </div>
        `;

        await sendEmail(contactData.subject, emailBody);
    }
}