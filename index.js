const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

// Import routes
const userRoutes = require("./routes/user.js");

const app = express();

require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:8000"],
  // Allow only the specified HTTP methods
  // methods: ["GET", "POST"],
  // Allow only the specified headers
  // allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once("open", () =>
  console.log("Now connected to MongoDB Atlas")
);

// [SECTION] Add your routes here
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server was connected: ${process.env.PORT}`);
});
