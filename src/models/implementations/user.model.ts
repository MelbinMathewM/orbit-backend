import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/IUser.model";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
});

const User = model<IUser>("user", userSchema);

export default User;