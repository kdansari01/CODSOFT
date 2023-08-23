const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

// Load environment variables from a .env file

// Set up middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// routes/jobRoutes.js

app.get("/", (req, res) => {
  console.log("ACCESSED");
  res.send("Health ok!");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB using Mongoose");

  // Start the server after the database connection is established
  const PORT = 9300;
  const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  server.on("error", (err) => {
    console.error("Error starting the server:", err);
  });
});
