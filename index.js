import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
    origin: "http://localhost:5173", // Your frontend's URL
    credentials: true,              // Allow cookies and credentials
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

const PORT = process.env.PORT || 3000;

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
