const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {


    res.sendFile(path.join(__dirname, "../public", "login.html"));
});


app.post('/logging', function(req, res) {

    let body = req.body;

    let username = body.username;
    let password = body.password;
    let name = body.name;
    let role = body.role;




    let logging = {
        username,
        password,
        name,
        role
    };


    res.json({
        ok: true,
        logging
    });
});

module.exports = app;