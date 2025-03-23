const bcrypt = require("bcrypt")
const argon2 = require("argon2")

const colorette = require("colorette");

const argonOptions = {
    type: argon2.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 2,
    hashLength: 64
};

async function hashPassword(password, algorithm) {
    if (algorithm === "bcrypt") {
        const saltRounds = 12;
        console.time(colorette.bgCyan("\nTime taken to hash password with bcrypt")) // start timer
        const hashed = await bcrypt.hash(password, saltRounds);
        console.timeEnd(colorette.bgCyan("\nTime taken to hash password with bcrypt")); // end timer
        return hashed;

    } else  if (algorithm === "argon2") {
        console.time(colorette.bgCyan("\nTime taken to hash password with argon2")); // Start timer        
        const hashed = await argon2.hash(password, argonOptions);
        console.timeEnd(colorette.bgCyan("\nTime taken to hash password with argon2"));
        return hashed;
    } else {
        throw new Error("Invalid algorithm!");
    }
}

async function verifyPassword(password, hash) {
    try {
        if (hash.startsWith("$2b$")) {
            console.time(colorette.bgCyan("\nTime taken to verify password with bcrypt")); // Start timer

            const isValid = await bcrypt.compare(password, hash);

            console.timeEnd(colorette.bgCyan("\nTime taken to verify password with bcrypt")); // End timer
            
            return isValid;
        } else if(hash.startsWith("$argon2")) {
            console.time(colorette.bgCyan("\nTime taken to verify password with argon2")); // Start timer

            const isValid = await argon2.verify(password, hash);

            console.timeEnd(colorette.bgCyan("\nTime taken to verify password with argon2")); // End timer

            return isValid
        } else {
            throw new Error("Invalid hash!");
        }
    } catch (error) {
        return false;
    }
}

module.exports = {
    hashPassword,
    verifyPassword
};