// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authroute.js';
// import userRoutes from './routes/userroute.js';
// import gameRoutes from './routes/gameroute.js';


// // Load environment variables from .env file
// dotenv.config();

// // Create an Express application
// const app = express();

// // Middleware
// // Enable CORS for all routes
// app.use(cors());
// // Parse JSON bodies from incoming requests
// app.use(express.json());

// // Routes
// // Use authentication-related routes for '/backend/auth'
// app.use('/backend/auth', authRoutes);
// // Use user-related routes for '/backend/users'
// app.use('/backend/users', userRoutes);
// app.use('/backend/games', gameRoutes); // Added this route for game sessions


// // Catch-all 404 route for debugging purposes.
// // This middleware will be hit if no other routes match the incoming request.
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found: ' + req.originalUrl });
// });

// // MongoDB connection
// // Connect to the MongoDB database using the URL from environment variables.
// // The 'dbName' option specifies the database to connect to.
// mongoose.connect(process.env.MONGO, { dbName: 'cluster0' })
//   .then(() => {
//     // If connection is successful, log a success message
//     console.log(' MongoDB connected');
//     // Start the Express server and listen on port 5000
//     app.listen(5000, () => console.log(' Server running at http://localhost:5000'));
//   })
//   .catch((err) => {
//     // If connection fails, log the error message
//     console.error(' MongoDB error:', err.message);
//   });
























// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// app.options("*", cors());
// import authRoutes from "./routes/authroute.js";
// import userRoutes from "./routes/userroute.js";
// import gameRoutes from "./routes/gameroute.js";

// // Load environment variables
// dotenv.config();

// const app = express();

// // ===============================
// // Middleware
// // ===============================

// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://joyverse-eight.vercel.app"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true,
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

// app.use(express.json());

// // ===============================
// // Routes
// // ===============================

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "JoyVerse Backend API is Running 🚀",
//   });
// });

// app.use("/backend/auth", authRoutes);
// app.use("/backend/users", userRoutes);
// app.use("/backend/games", gameRoutes);

// // ===============================
// // 404 Handler
// // ===============================

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route not found: ${req.originalUrl}`,
//   });
// });

// // ===============================
// // MongoDB Connection
// // ===============================

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log("✅ MongoDB Connected");

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error");
//     console.error(err);
//   });























import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authroute.js";
import userRoutes from "./routes/userroute.js";
import gameRoutes from "./routes/gameroute.js";

// Load .env
dotenv.config();

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors({
  origin: "https://joyverse-eight.vercel.app",
  credentials: true,
}));

app.use(express.json());
app.options("*", cors());

app.use(express.json());

// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "JoyVerse Backend API is Running 🚀",
  });
});

app.use("/backend/auth", authRoutes);
app.use("/backend/users", userRoutes);
app.use("/backend/games", gameRoutes);

// ===============================
// 404
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// ===============================
// MongoDB
// ===============================

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  });