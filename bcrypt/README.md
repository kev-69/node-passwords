# Node.js Authentication API with bcrypt and JWT

This is a simple Node.js API for user authentication using `bcrypt` for password hashing and `jsonwebtoken` (JWT) for token generation. It includes routes for user registration, login, and retrieving all registered users.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [API Endpoints](#api-endpoints)
   - [Register a User](#1-register-a-user)
   - [Login a User](#2-login-a-user)
   - [Get All Users](#3-get-all-users)
5. [Project Structure](#project-structure)
6. [Notes](#notes)
7. [Dependencies](#dependencies)
8. [Future Improvements](#future-improvements)
9. [License](#license)
10. [Author](#author)

---

## Features

- **User Registration**: Register a new user with a hashed password.
- **User Login**: Authenticate a user and return a JWT token.
- **Retrieve Users**: Get a list of all registered users (for testing purposes only).
- **Environment Variables**: Securely manage sensitive data like JWT keys.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A text editor or IDE (e.g., [VS Code](https://code.visualstudio.com/))

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install Dependencies**
npm install

3. **Create a .env File**
Create a .env file in the root directory and add the following environment variables:

PORT=5001
JWT_KEY=your_secret_key

4. **Start the Server**
Run the following command to start the server:

npm start
The server will start at http://localhost:5001.


### API Endpoints
1. ***Register a User***
POST */register*
*Request Body (JSON):*
{
  "name": "Kev Lar",
  "username": "kev-69",
  "password": "password123"
}

*Response (Success):*
{
  "message": "User created successfully",
  "username": "johndoe",
  "name": "John Doe"
}

*Response (Error):*
{
  "message": "User already exists"
}

2. ***Login a User***
POST */login*
*Request Body (JSON):*
{
  "username": "kev-69",
  "password": "password123"
}

*Response (Success):*
{
  "message": "Login successful",
  "token": "your_jwt_token"
}

*Response (Error):*
{
  "message": "Invalid credentials"
}

2. ***Get All Users***
GET */users*
[
  {
    "name": "John Doe",
    "username": "johndoe",
    "password": "hashed_password"
  }
]

Note: This endpoint is for testing purposes only. Do not expose user data in production.

.
├── index.js       # Main server file
├── package.json   # Project metadata and dependencies
├── .env           # Environment variables (not included in the repo)
└── README.md      # Documentation

Notes
In-Memory Database: This project uses an in-memory array (users) to store user data. All data will be lost when the server restarts. For production, use a database like MongoDB, PostgreSQL, or MySQL.
Security: Do not log sensitive information like plain-text passwords or tokens in production.

Dependencies
express: Web framework for Node.js
bcrypt: Password hashing library
jsonwebtoken: Library for generating and verifying JWTs
cors: Middleware for enabling CORS
body-parser: Middleware for parsing JSON request bodies
dotenv: Loads environment variables from a .env file

Future Improvements
Add persistent storage using a database (e.g., MongoDB, PostgreSQL).
Implement user roles and permissions.
Add password reset functionality.
Use HTTPS for secure communication.
License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

Author
Created by Bismark Obuobi. Feel free to reach out for any questions or suggestions!


---

### How to Use This
1. Save the above content in a file named `README.md` in the root of your project directory.
2. Replace `<repository-url>` and `<repository-folder>` with your actual repository details.
3. Replace `your_secret_key` in the `.env` example with your actual JWT secret key.
4. Update the "Author" section with your name and contact details if desired.

Let me know if you need further help! 😊---

### How to Use This
1. Save the above content in a file named `README.md` in the root of your project directory.
2. Replace `<repository-url>` and `<repository-folder>` with your actual repository details.
3. Replace `your_secret_key` in the `.env` example with your actual JWT secret key.
4. Update the "Author" section with your name and contact details if desired.

Let me know if you need further help! 😊