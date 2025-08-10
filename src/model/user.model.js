import { Schema, mongoose } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    email: {
        type: String, 
        required: true, 
        lowercase: true, 
        trim: true, 
        unique: true //Email must be unique
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10, 
        maxlength: 10
    },
    role: {
        type: String, 
        enum: ["VOLUNTEER", "INTERN"],
        required: true
    }
}, 
{
    timestamps: true
});

export default mongoose.model("User", userSchema)