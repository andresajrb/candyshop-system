const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const login = require('../data/login');
const Product = require('../data/productDAO');


app.use(express.static(path.join(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Init Applicaton
app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, "../public", "login.html"));
});

// Loggin
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
            message: mensaje,
            url: 'http://localhost:3000/admin'
        });

    }, (err) => {

        if (err != false) {
            res.status(200).json({
                ok: true,
                message: 'Error DB, llame al departamento de sistemas'
            });
            return console.log(err);
        }

        res.status(200).json({
            ok: false,
            message: 'No se encontro el usuario requerido'
        })
    });


});


app.get('/admin', function(req, res) {

    res.sendFile(path.join(__dirname, "../public", "admin.html"));
});

//CRUD PRODUCTS
app.get('/product/find/all', function(req, res) {

    let productFind = new Product();

    productFind.getProducts().then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });

});

app.get('/product/find/active', function(req, res) {

    let productFind = new Product();

    productFind.getActiveProducts().then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });

});

app.get('/product/find/id/:id', function(req, res) {

    let id = req.params.id;
    let productFind = new Product();

    productFind.getProductById(id).then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });
});

app.get('/product/find/category/:category', function(req, res) {

    let category_id = req.params.category_id;
    let productFind = new Product();

    productFind.getProductByCategory(category_id).then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });
});

app.get('/product/find/user/:user', function(req, res) {

    let user_id = req.params.user_id;
    let productFind = new Product();

    productFind.getProductByUser(user_id).then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });
});

app.put('/product/update', function(req, res) {

    let productUpdate = new Product();

    productUpdate.constructorServiceUpdateInsert(req);

    productUpdate.update().then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });

});


app.post('/product/create', function(req, res) {

    let productInsert = new Product();

    productInsert.constructorServiceUpdateInsert(req);

    productInsert.insert().then(result => {
        res.json({
            ok: true,
            result
        });
    }, (err) => {
        res.status(400).json({
            ok: false,
            error: err
        });
    });

});


app.put('/product/disable', function(req, res) {

    let productDisable = new Product();

    let id = req.body.id;
    let mode = req.body.mode;

    productDisable.id = id;

    productDisable.disable(mode)
        .then(result => {
            res.json({
                ok: true,
                result
            });
        }, (err) => {
            res.status(400).json({
                ok: false,
                error: err
            });
        });

});


module.exports = app;