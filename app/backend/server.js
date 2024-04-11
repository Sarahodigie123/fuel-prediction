const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "account"
});

// Database Connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        throw err;
    }
    console.log('Connected to the database');
});

// Register endpoint
app.post('/register', [
    check('username', "Invalid username format").isLength({ min: 3, max: 20 }),
    check('password', "Password length must be 8-10 characters").isLength({ min: 8, max: 10 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, password } = req.body;
    const sql = "INSERT INTO login (name, username, password) VALUES (?, ?, ?)";
    const values = [name, username, password];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (result.length > 0) {
            return res.json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Login failed. Invalid credentials' });
        }
    });
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
