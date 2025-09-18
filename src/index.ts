import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { validateEnv } from "./utils/env-config.util";
import connectDB from "./configs/db.config";
import authRouter from "./routes/auth.admin";
import adminRouter from "./routes/admin.route";
import { errorHandler } from "./middlewares/error.middleware";
import bookingRouter from "./routes/booking.route";

dotenv.config();
validateEnv();
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 5011;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res,next) => {
    console.log("hii");
    next();
})

app.use("/api/booking/", bookingRouter);
app.use("/api/auth/", authRouter);
app.use("/api/admin/", adminRouter);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
