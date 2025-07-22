// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv";
import connectdb from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

import messageroutes from "./routes/messageroute.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import cors from "cors";

// const userRoutes = require("./routes/userRoutes");

dotenv.config();

// const app = express();
const PORT = process.env.PORT || 8080;

// Connect to database

// Middlewares
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies

const allowedOrigins = [
  "http://localhost:5173",
  "https://chatsphere-application-reactjs.netlify.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions)); // Enable CORS with options
// Routes
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Chat Application API");
});
app.use("/api/v1/message", messageroutes);
// Start server
server.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port - ${PORT}`);
});
