import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    quiet: true
});

async function dbConnect() {
    try {
        //Get the URI
        const URI = process.env.MONGODB_URI;

        //Connect to the database
        const connection = await mongoose.connect(URI);

        console.log("Database Connected Successfully")
    } catch(err) {
        console.log("Database Connection Error Occured: " + err)
    }
}

export default dbConnect;