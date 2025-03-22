# Node Passwords

This repository is a comparison of password protection algorithms in Node.js, specifically focusing on **Argon2** and **bcrypt**. It contains two sub-repositories, one for each algorithm, to demonstrate their usage and performance in password hashing and verification.

## Repository Structure

- **`argon2/`**: Contains the implementation of password hashing and verification using the Argon2 algorithm.
- **`bcrypt/`**: Contains the implementation of password hashing and verification using the bcrypt algorithm.

## Purpose

The goal of this repository is to:

1. Compare the features, performance, and ease of use of Argon2 and bcrypt.
2. Provide examples of how to implement these algorithms in a Node.js application.
3. Highlight the differences in security and configuration options between the two algorithms.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-passwords.git
   cd node-passwords
   ```

2. Navigate to the sub-repo you want to test (argon2 or bcrypt):
```bash
    cd argon2
    # or
    cd bcrypt
```

3. Install dependencies:
```bash
    npm install
```

4. Create a .env file in the respective sub-repo directory and add the following:
```bash
    PORT=3000
    JWT_SECRET=your_secret_key
```

5. Start the server
```bash
    npm start
```

### Features
## Argon2
Argon2 is a modern password hashing algorithm designed to be memory-hard, making it resistant to GPU-based attacks.
Implementation can be found in the argon2/ directory.

## bcrypt
bcrypt is a widely-used password hashing algorithm that has been around for decades and is known for its simplicity and reliability.
Implementation can be found in the bcrypt/ directory

### Comparison
    | Feature            | Argon2                          | bcrypt                          |
    |--------------------|---------------------------------|---------------------------------|
    | **Security**       | High (memory-hard)             | Moderate                       |
    | **Performance**    | Slower (more secure)           | Faster                         |
    | **Ease of Use**    | Moderate (more configuration)  | Easy                           |
    | **Node.js Support**| Supported via `argon2` package | Supported via `bcrypt` package |

### Example Usage
## Argon2
```bash
    const argon2 = require("argon2");

    // Hash a password
    const hashedPassword = await argon2.hash("your_password");

    // Verify a password
    const isValid = await argon2.verify(hashedPassword, "your_password");
```
## bcrypt
```bash
    const bcrypt = require("bcrypt");

    // Hash a password
    const hashedPassword = await bcrypt.hash("your_password", 10);

    // Verify a password
    const isValid = await bcrypt.compare("your_password", hashedPassword);
```

### Conclusion
Both Argon2 and bcrypt are excellent choices for password hashing, but Argon2 is generally considered more secure due to its memory-hard properties. However, bcrypt remains a reliable and widely-used option.

### License
This project is licensed under the MIT License.

### Acknowledgements
[Argon2 Documentation](https://github.com/ranisalt/node-argon2)
[bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js)
