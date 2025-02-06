// import connectDB from './db.js';

// import express from 'express';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes.js';
// import cookieParser from 'cookie-parser';

// import dotenv from 'dotenv';
// dotenv.config();
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 8083;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(cors());
// app.use(cookieParser());



// app.use("/api/v1/auth",authRoutes);


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//     }
// );


// Load environment variables
import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8083;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage });

// API Endpoint to Upload Image
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imageUrl: req.file.path }); // Return Cloudinary URL
});

// Authentication Routes
app.use("/api/v1/auth", authRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
