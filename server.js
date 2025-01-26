require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();


// middleware
app.use(cors());
app.use(bodyParser.json());

// Mysql database
const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'projectdatabase',
    port: process.env.DB_PORT || 3306
});

// pripojenie na MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Register route 

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    // otestuje ci dany user uz existuje v databaze
    db.execute('SELECT * FROM usersinfo WHERE email = ?', [email], async (err, results) => {

        if (err)
            return res.status(500).json( { message: 'Database error'});
    
        if (results.length > 0)
            return res.status(400).json( { message: 'User already exists.'});

         // password hash
        const hashedPass = await bcrypt.hash(password, 10);

        // pridanie usera do databazy
        db.execute('INSERT INTO usersinfo (email, password) VALUES (?, ?)',
            [email, hashedPass], (err, result) => {
                if (err)
                    return res.status(500).json( { message: 'Failed to register user.'} );
                res.status(201).json( { message: 'User registered successfully.' } );
            }
        );
    });
});


// login route

app.post("/login", async (req, res) => { 
    const { email, password} = req.body;

    // najde usera v database podla mailu
    db.execute('SELECT * FROM usersinfo WHERE email = ?', [email], async (err, results) => {
        if (err)
            return res.status(500).json( { message: 'Database error.'} );

        if (results.length === 0)
            return res.status(400).json( { message: 'User not found.'} );

        const user = results[0]; // zoberie prveho a jedineho usera
        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid)
            return res.status(400).json( { message: 'Invalid Password.'} );

        // vygeneruje JWT Token
        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h'} // token vyprsi po 1 hodine
        );

        res.json( { message: 'Login succesful!', token} );
    });
});

{/*app.post("/test", (req, res) => {
    res.json({ message: "Test route works!"});
});*/}

app.get("/", (req, res) => {
    res.send("Welcome to the backend server!.");
});

// starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));