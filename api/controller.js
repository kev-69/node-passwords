const bcrypt = require("bcrypt"); // Import bcryptjs
const argon2 = require("argon2"); // Import argon2

const users = []; // Store users in memory

const registerUser = async (req, res) => {
    try {
        const {
            username,
            password,
            algorithm
        } = req.body;

        // check missing fields
        if (!username || !password || !algorithm) return res.status(400).send("All fields are required");

        // Hash the password
        let hashedPassword
        if (algorithm === "bcrypt") {
            hashedPassword = await bcrypt.hash(password, 10);
        } else if (algorithm === "argon2") {
            hashedPassword = await argon2.hash(password);
        } else {
            return res.status(400).send("Invalid algorithm type");
        }

        // Check if the user already exists
        const user = users.find(user => user.username === username); 
        if (user) return res.status(400).json("User already exists");

        // Store the user in memory
        const newUser = { 
            username,
            password1: hashedPassword,
            algorithm
        }
        users.push(newUser);
        res.status(201).json({ message: "User created successfully", data: newUser });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const loginUser = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        // check missing fields
        if (!username || !password) return res.status(400).send("All fields are required");

        // Check if the user exists
        const user = users.find(user => user.username === username);
        if (!user) return res.status(400).send("User not found");

        // Compare the password
        let isPasswordValid
        if (user.algorithm === "bcrypt") {
            isPasswordValid = await bcrypt.compare(password, user.password);
        } else if (user.algorithm === "argon2") {
            isPasswordValid = await argon2.verify(user.password, password);
        } else {
            return res.status(400).send("Invalid algorithm type");
        }

        if (!isPasswordValid) return res.status(400).send("Invalid credentials");

        res.status(200).json({ message: "Login successful", data: user });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const getUsers = (req, res) => {
    try {
        res.status(200).json({ message: "Users retrieved successfully", data: users });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUsers
};