//Comments are purely written by the Author - Akshat Gohil
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnection.js";

//Configure the .env variables for this file
dotenv.config({
    quiet: true
});

//Initialize the database connection
await dbConnect();

//Initialize the app
const app = express();
//Configure CORS 
app.use(cors());
//Parse JSON data on the backend
app.use(express.json({ 
    limit: "16kb"
}));

//Take port number from .env file or 3000 (fallback)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});