const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT = process.env.JWT_SECRET;

const users = [];

// register
const register = async (req, res) => {
    const {
        name,
        username,
        email,
        password,
    } = req.body
    try {
        // check if user already exists
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: "User already exists" })
        }

        // hash password
        const hashedPassword = await argon2.hash(password)

        // save user to users array
        users.push({
            name,
            username,
            email,
            password: hashedPassword
        })
        res.status(201).json({ message: "User created successfully", username, name, email })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Internal server error" })
    }
}

// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // find user by email
        const user = users.find(user => user.email === email);

        if (!user) return res.status(400).json({ message: "Invalid credentials" }); // user not found

        // verify password
        const isPasswordValid = await argon2.verify(user.password, password);
        console.log(isPasswordValid);
        
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" }); // invalid password

        // generate token
        const token = jwt.sign({ email }, JWT, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token, data: user });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong. Internal server error" });
    }
};

// get all users
const allUsers = async (req, res)=> {
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = {
    register,
    login,
    allUsers
}