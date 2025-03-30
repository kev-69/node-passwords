const express = require("express");
const router = express.Router();

const {
    register,
    login,
    allUsers
} = require("./controllers");

// routes
router.get("/users", allUsers)
router.post("/user/register", register)
router.post("/user/login", login)

module.exports = router;