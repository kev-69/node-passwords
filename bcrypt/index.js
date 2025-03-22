const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")


const app = express()
const PORT = process.env.PORT || 5001
dotenv.config()

// Dummy database
const users = [];

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
// Register
app.post("/register", async (req, res) => {
    try {
        const { name, username, password } = req.body;

        // check if user already exists
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: "User already exists"})
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // save user to database
        users.push({
            name,
            username,
            password: hashedPassword
        })
        // console.log(`New user registered: Name: ${name}, Username: ${username}, Hashed Password: ${hashedPassword}`);
        res.status(201).json({ message: "User created successfully", username, name })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
})

// Login
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username)

        // check if user exists
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // generate token
        const token = jwt.sign({ username }, process.env.JWT_KEY, { expiresIn: "1h" })
        // console.log(`User logged in: Username: ${username}, Password: ${password} Token: ${token}`);
        
        res.status(200).json({ message: "Login successful", token })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
    
})

// get all users
app.get("/users", async (req, res) => {
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
});

// start server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
// console.log(users);