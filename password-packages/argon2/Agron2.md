# Argon2: Algorithm & How It Works
Argon2 is a key derivation function (KDF) and password hashing algorithm, not an encryption algorithm. It does not "encrypt and decrypt" passwords but instead hashes passwords securely.

## 1. What Algorithm Does Argon2 Use?
Argon2 is based on the "memory-hard" hash function principle. It uses:

Blake2b hash function for cryptographic security.

Parallel processing for faster computation.

Memory-hard computations to make brute-force attacks harder.

Salt and secret keys to prevent rainbow table attacks.

## 2. How Argon2 Works
Argon2 follows these steps:

1️⃣ Input Preparation
The user's password is combined with a random salt.

Optional parameters:

Memory cost (how much RAM it should use).

Time cost (number of iterations).

Parallelism (number of CPU threads used).

2️⃣ Memory-Intensive Processing
Argon2 creates blocks of memory filled with pseudo-random data.

It repeatedly mixes data using the Blake2b hash function.

The process is highly parallelized (uses multiple CPU cores).

A large amount of memory is required, making GPU/ASIC attacks difficult.

3️⃣ Final Hash Generation
After several iterations, Argon2 derives a final hash.

This hash is stored in the database along with the salt.

The stored format:
```bash
$argon2id$v=19$m=65536,t=3,p=4$<salt>$<hash>
```

## 3. Why is Argon2 Secure?
✅ Memory-Hard
Requires a lot of RAM, making brute-force attacks expensive.

✅ Resistant to GPU/ASIC Attacks
Designed to be inefficient on specialized hardware like GPUs.

✅ Parallel Computation
Uses multiple CPU cores, speeding up legitimate processing while slowing down attacks.

✅ Prevents Rainbow Table Attacks
Uses a random salt, ensuring each hash is unique.

## 4. Argon2 Variants
Variant	Best Use Case	Features
Argon2i	General password hashing	Resistant to side-channel attacks
Argon2d	Cryptocurrency & secure storage	Resistant to GPU attacks
Argon2id (Recommended)	Best for password hashing	Hybrid of Argon2i & Argon2d (Most secure)
👉 Use Argon2id for password hashing in authentication systems.

## 5. Is Argon2 the Best for Password Hashing?
✅ Yes, Argon2id is currently the best password hashing algorithm because:

More secure than bcrypt & PBKDF2.

Protects against brute-force & GPU attacks.

Future-proof cryptographic design.