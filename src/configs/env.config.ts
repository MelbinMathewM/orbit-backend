import dotenv from "dotenv";

dotenv.config();

export const env = {
    get PORT() {
        return process.env.PORT;
    },
    get MONGO_URI() {
        return process.env.MONGO_URI;
    },
    get FRONTEND_URL() {
        return process.env.FRONTEND_URL
    },
    get JWT_ACCESS_SECRET() {
        return process.env.JWT_ACCESS_SECRET
    },
    get JWT_REFRESH_SECRET() {
        return process.env.JWT_REFRESH_SECRET
    },
    get EMAIL_USER() {
        return process.env.EMAIL_USER;
    },
    get EMAIL_PASS() {
        return process.env.EMAIL_PASS;
    },
    
}