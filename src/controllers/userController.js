const userSchema = require('../models/userModel');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username ||!email ||!password) {
        return res.status(404).json({ message: 'Please fill all the fields' });
    }

    try {
        const existingEmail = await userSchema.findOne({ email });
        const existingUser = await userSchema.findOne({ username });
        if (existingUser) return res.status(409).json({ message: 'Username already exists' });
        if (existingEmail) return res.status(409).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userSchema({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}