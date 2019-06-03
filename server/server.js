const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const login = require('../data/login');


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

    let logging = {
        username,
        password
    };

    login.autentication(logging.username, logging.password).then(mensaje => {
        res.status(200).json({
            ok: true,
            mensaje: mensaje
        });

    }, (err) => {

        if (err != false) {
            res.status(200).json({
                ok: true,
                mensaje: 'Error DB, llame al departamento de sistemas'
            });
            return console.log(err);
        }

        res.status(401).json({
            ok: false,
            mensaje: 'No se encontro el usuario requerido'
        })
    });


});

module.exports = app;