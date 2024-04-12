const express = require("express");
const mysql = require("mysql")
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json());

const database = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "db",
});

app.post('/register', async(req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    database.query("INSERT INTO users (name, username, password) VALUES (?, ?, ?)", [name, username, password],
     (err, result ) => {
        console.log("Last inserted ID:", result.insertId);
    }
  );
})

app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    database.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
    (err, result) => {
        if (err) {
            res.send( {err: err});
            console.log("H11 = 1")
        }

        if (result.length > 0) {
            res.send(result);
            console.log("User logged in successfully:", result);
        } else {
            res.status(401).send({ error: "Incorrect username or password" });
            console.log("Incorrect username or password");
        }
    }
    )

})


app.listen(3306, () => {
    console.log(`Server is running on port`);
});
