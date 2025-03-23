#!/usr/bin/env node

const inquirer = require('inquirer');
const colorette = require("colorette");
const { hashPassword,
    verifyPassword 
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

        const hashedPassword = await hashPassword(password, algorithm);
        console.log(colorette.green(`\nHashed password: ${hashedPassword}`));
    } else if (action === "Verify a password") {
        const { hash } = await inquirer.prompt([
            {
                type: "input",
                name: "hash",
                message: "Enter the hashed password:"
            }
        ]);

        const isValid = await verifyPassword(password, hash);
        console.log(isValid
            ? colorette.yellow(`\nPassword is valid! ✅\n`)
            : colorette.red(`\nPassword is invalid! ❌\n`)
        );
    } else {
        throw new Error("Invalid option!")
    }

    main(); // Recursive call
}

main();