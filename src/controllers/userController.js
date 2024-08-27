const { findById } = require('../models/blogSchema');
const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
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
    try {
        const users = await userSchema.find();
        res.json(users);
    } catch {
        console.error(error);
        res.status(500).json({ message: error.message, error });
    }
}

exports.getUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const user = await userSchema.findById( _id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch {
        console.error(error);
        res.status(500).json({ message: error.message, error });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const user = await userSchema.findByIdAndUpdate(_id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            
    }
    res.json(user);
    } catch {
        console.error(error);
        res.status(500).json({ message: error.message, error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const user = await userSchema.findByIdAndDelete(_id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });

        }
    } catch {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email ||!password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        const user = await userSchema.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
        
        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message, error });
    }
}

exports.logout = async (req, res) => {
    try {
        req.user = null;
        res.status(204).json({ message: 'Logged out successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message, err });
    }
}