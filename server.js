const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'nour',
    password : '123456',
    database : 'signup_login'
});

db.connect((err) => err ? console.log(err) : console.log('DB Connected..'))

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res) => res.render('index'))
app.get('/login',(req,res) => res.render('login'))
app.get('/signup',(req,res) => res.render('index'))
app.get('/dashboard',(req,res) => res.render('dashboard'))


app.post('/signup',(req,res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
        err ? console.log(err) : res.render('dashboard')
    });
})

app.post('/login',(req,res) => {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.email, req.body.password] , (err, result) => {
        if (err) console.log(err)
        res.send(result)
    });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,() => console.log(`Running on port ${PORT}`))
