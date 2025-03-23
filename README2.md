# 🔐 bcrypt vs Argon2 - A Password Hashing Showdown

## 📌 Project Overview
This project compares **bcrypt** and **Argon2** for password hashing in terms of **speed, security, and usability**. It includes:
- 🔥 **Benchmarking** - Hashing and verification speed comparison.
- 🔒 **Security Analysis** - Resistance to brute-force and GPU attacks.
- 🛠️ **Usability** - Real-world authentication examples using Express.js.
- 🎮 **CLI Tool** - Test password hashing interactively.

## 📂 Project Structure
```
bcrypt-vs-argon2/
│── benchmarks/          # Scripts for benchmarking speed & verification
│── security-tests/      # Scripts to test brute-force resistance
│── api/                 # Express.js authentication example
│── cli/                 # CLI tool for testing password hashing
│── README.md            # Explanation & results
│── package.json
│── .gitignore
```

## 🚀 Installation
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Clone the Repo
```sh
git clone https://github.com/your-username/bcrypt-vs-argon2.git
cd bcrypt-vs-argon2
```

### Install Dependencies
```sh
npm install
```

## ⚡ Usage
### 1️⃣ Run Benchmark Tests
```sh
node benchmarks/hashComparison.js
```
**Expected Output (Approximate)**:
```
bcrypt-hash: 250ms  
argon2-hash: 350ms  
bcrypt-verify: 5ms  
argon2-verify: 2ms  
```

### 2️⃣ Run CLI Tool for Interactive Testing
```sh
node cli/index.js
```
This will prompt you to enter a password and choose between bcrypt and Argon2.

### 3️⃣ Run Express.js Authentication Example
```sh
node api/server.js
```
Then test the endpoints using **Postman or cURL**:
```sh
curl -X POST http://localhost:5000/register -d "username=user&password=securepass"
```

## 🔬 Security Analysis
| Algorithm  | GPU Resistance | Hash Speed | Recommended For |
|------------|---------------|------------|----------------|
| bcrypt     | Medium        | Medium     | Web apps, authentication |
| Argon2id   | High          | Slow       | High-security applications |

## 📌 Conclusion
- **bcrypt** is **widely used** and offers **good security**.
- **Argon2** is **more secure** against **brute-force attacks** and is **recommended for modern applications**.

## 📜 License
MIT License

## ⭐ Contribute
PRs are welcome! Fork the repo and submit your improvements. 🙌