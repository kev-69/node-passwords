## What Algorithm Does bcrypt Use?
bcrypt is based on the Blowfish cipher and uses a cryptographic hashing algorithm, not traditional encryption. It is a one-way function designed for securely storing passwords rather than encrypting and decrypting them.

## How bcrypt works
bcrypt follows these key steps:

1. Salt Generation:

bcrypt generates a unique salt (random data) for each password before hashing.

This prevents attacks like rainbow table attacks.

2. Key Expansion & Hashing (Blowfish-based Algorithm):

bcrypt applies the EksBlowfish (Expensive Key Schedule Blowfish) algorithm, which is an adaptive function that makes brute-force attacks computationally expensive.

The algorithm repeatedly applies the Blowfish cipher to mix the password and salt.

3. Work Factor (Cost Factor) Application:

bcrypt includes a configurable work factor (cost factor), which determines how many iterations of the hashing process occur.

A higher work factor increases computational time, making brute-force attacks more difficult.

4. Final Hash Generation:

The output is a 60-character hash string containing the algorithm version, cost factor, salt, and hashed password.

## Why bcrypt is Secure
Salt prevents precomputed attacks: Each password has a unique salt, making dictionary and rainbow table attacks ineffective.

Adaptive Cost Factor: The hashing process slows down over time as computing power increases.

One-Way Function: bcrypt does not support decryption; instead, it verifies passwords by hashing the input and comparing it to the stored hash.