#!/usr/bin/env node

const inquirer = require('inquirer');
const colorette = require("colorette");
const { 
        hashBcrytp,
        hashArgon,
        verifyBcrypt,
        verifyArgon 
} = require('./utils');


async function main() {
    console.log(colorette.green('\n🔐 Welcome to Password Hashing CLI🔐\n'));
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: ["Hash a password", "Verify a password", "Exit"]
        }
    ]);

    if (action === "Exit") {
        console.log(colorette.yellow("\nGoodbye! 👋"));
        process.exit(0)
    }

    const { password } = await inquirer.prompt([
        {
            type: "password",
            name: "password",
            message: "Enter your password:",
            mask: "*"
        }
    ])

    if (action === "Hash a password") {
        const { algorithm } = await inquirer.prompt([
            {
                type: "list",
                name: "algorithm",
                message: "Choose an algorithm:",
                choices: ["bcrypt", "argon2"]
            }
        ]);

        let hashedPassword;
        if (algorithm === "bcrypt") {
            hashedPassword = await hashBcrytp(password);
            
        } else if (algorithm === "argon2") {
            hashedPassword = await hashArgon(password);
        } else {
            throw new Error("Invalid algorithm!");
        }

        console.log(colorette.green(`\nHashed password: ${hashedPassword}`));
    } else if (action === "Verify a password") {
        const { hash } = await inquirer.prompt([
            {
                type: "input",
                name: "hash",
                message: "Enter the hashed password:"
            }
        ]);

        try {
            let sanitizedHash = hash.trim();
            let isValid;
            if (sanitizedHash.startsWith("$2b$")) {
                // Hash is bcrypt
                isValid = await verifyBcrypt(password, hash);
                console.log(isValid
                    ? colorette.yellow(`\nPassword is valid! ✅ (bcrypt)\n`)
                    : colorette.red(`\nPassword is invalid! ❌ (bcrypt)\n`)
                );
                console.log(sanitizedHash)
            } else if (sanitizedHash.startsWith("$argon2")) {
                // Hash is Argon2
                isValid = await verifyArgon(password, hash);
                console.log(isValid
                    ? colorette.yellow(`\nPassword is valid! ✅ (argon2)\n`)
                    : colorette.red(`\nPassword is invalid! ❌ (argon2)\n`)
                );
                console.log(sanitizedHash)
            } else {
                console.log(colorette.red("\nInvalid hash format! Hash must start with '$2b$' (bcrypt) or '$argon2' (argon2). ❌\n"));
            }
        } catch (error) {
            console.log(colorette.red(`\nError: ${error.message} ❌\n`));
        }
    } else {
        throw new Error("Invalid option!")
    }

    main(); // Recursive call
}

main();