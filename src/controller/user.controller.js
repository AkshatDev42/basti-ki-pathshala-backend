import User from "../model/user.model.js";


export const registerUser = async (req, res) => {
    try {
        const { name, email, phone, role } = req.body;
        if (!name || !email || !phone || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered' });
        }

        // Create and save new user
        const user = new User({ name, email, phone, role });
        await user.save();

        res.status(201).json({ message: "User registered successfully!", user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error Occured!" });
    }
}




export const getUsers = async (req, res) => {
    try {
        // Simple admin check using query param ?admin=true
        if (req.query.admin !== 'true') {
            return res.status(403).json({ message: 'Access denied: admin only' });
        }

        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}