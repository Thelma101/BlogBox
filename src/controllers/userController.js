const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username ||!email ||!password) {
        return res.status(400).json({ message: 'Please fill all the fields' });
    }

    try {
        const existingEmail = await userSchema.findOne({ email });
        const existingUser = await userSchema.findOne({ username });
        if (existingUser) return res.status(409).json({ message: 'Username already taken' });
        if (existingEmail) return res.status(409).json({ message: 'Email address already in use' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userSchema({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message, error });
    }
}

exports.getAllUsers = async (req, res) => {
    const userSchema = req.bcrypt.getSchema
}