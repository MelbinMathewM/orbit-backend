import { env } from "../configs/env.config";

export function validateEnv() {
    if (!env.PORT) {
        throw new Error("PORT is not found in the env");
    }
    if (!env.MONGO_URI) {
        throw new Error("MONGO_URI is not found in the env");
    }
    if (!env.FRONTEND_URL) {
        throw new Error("FRONTEND_URL is not found in the env");
    }
    if (!env.JWT_ACCESS_SECRET) {
        throw new Error("JWT_ACCESS_SECRET is not found in the env");
    }
    if (!env.JWT_REFRESH_SECRET) {
        throw new Error("JWT_REFRESH_SECRET is not found in the env");
    }
    if (!env.EMAIL_USER) {
        throw new Error("EMAIL_USER is not found in the env");
    }
    if (!env.EMAIL_PASS) {
        throw new Error("EMAIL_PASS is not found in the env");
    }
}