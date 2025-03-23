### Coomments
Argon2 is designed to be highly efficient while being resistant to GPU attacks and brute-force attempts. The test results show that Argon2 can actually hash faster than bcrypt, depending on the chosen parameters.

Why is Argon2 faster in this case?
1. Parallelism: Your Argon2 settings allow it to use 2 parallel threads, making it faster on multi-core processors.

2. Memory Usage: With memoryCost: 65536, Argon2 is using 64MB of RAM to slow down attackers but still efficiently hash passwords.

3. Bcrypt’s Algorithmic Limitations: Bcrypt is a CPU-bound algorithm and does not utilize parallel computing or high memory usage like Argon2. This makes it slower for hashing, especially at higher saltRounds.

### But... Is Argon2 Always Faster?
Not always. The performance depends on the parameters you set. If you increase Argon2’s timeCost and memoryCost, it will slow down significantly to resist brute-force attacks.

Try tweaking:
    ```bash
    const argonOptions = {
        type: argon2.argon2id,
        memoryCost: 524288, // 512MB
        timeCost: 5,  // More iterations
        parallelism: 4, // More threads
        hashLength: 64
    }

    ```
This will make hashing much slower but also significantly more resistant to cracking.

### Takeaway
🚀 Argon2 is superior in both speed and security when properly tuned.
✅ If you’re building a real-world app, Argon2id is the best choice for hashing passwords securely.