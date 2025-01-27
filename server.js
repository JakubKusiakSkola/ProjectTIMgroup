require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();

{/*const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 3306,
    ssl: {
        rejectUnauthorized: false,
    },
};

let connection;

const connectToDatabase = async () => {
    try {
        connection = await mysql.createConnection(config);
        console.log('Connected to Azure MySQL Database');
    } catch (err) {
        console.error('Failed to connect to Azure MySQL Database:', err);
        process.exit(1); 
    }
}

const closeDatabaseConnection = async () => {
    try {
        if (connection) {
          await connection.end();
          console.log('Database connection closed.');
        }
      } catch (err) {
        console.error('Error closing the database connection:', err);
      } finally {
        process.exit(0);
      }
};

process.on('SIGINT', closeDatabaseConnection);
process.on('SIGTERM', closeDatabaseConnection);

connectToDatabase(); */}


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
            return res.status(400).json( { message: 'Použivateľ už existuje.'});

         // password hash
        const hashedPass = await bcrypt.hash(password, 10);

        // pridanie usera do databazy
        db.execute('INSERT INTO usersinfo (email, password) VALUES (?, ?)',
            [email, hashedPass], (err, result) => {
                if (err)
                    return res.status(500).json( { message: 'Registrácia zlyhala.'} );
                res.status(201).json( { message: 'Registrácia prebehla úspešne.' } );
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
            return res.status(400).json( { message: 'Používateľ sa nenašiel.'} );

        const user = results[0]; // zoberie prveho a jedineho usera
        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid)
            return res.status(400).json( { message: 'Neplatné heslo.'} );

        // vygeneruje JWT Token
        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h'} // token vyprsi po 1 hodine
        );

        res.json( { message: 'Prihlásenie prebehlo úspešne!', token} );
    });
});

app.get("/", (req, res) => {
    res.send("Welcome to the backend server!.");
});

// starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));