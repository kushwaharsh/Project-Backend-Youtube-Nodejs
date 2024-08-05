import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
