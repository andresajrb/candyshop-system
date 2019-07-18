const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const login = require('../data/login');
const product = require('../data/product');
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
app.get('/product/find', function(req, res) {


    Product.getProducts().then(result => {
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

app.get('/product/findid', function(req, res) {

    let id = req.query.id;

    Product.getProductById(id).then(result => {
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

    let name = req.body.name;
    let description = req.body.description;
    let brand = req.body.brand;
    let cost = req.body.cost;
    let price = req.body.price;
    let isactive = req.body.isactive;
    let providerid = req.body.providerid;
    let userreg = req.body.userreg;

    product.productCRUD.insert(name, description,
            brand, cost, price, isactive, providerid, userreg)
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


app.put('/product/disable', function(req, res) {

    let id = req.body.id;
    let mode = req.body.mode;

    product.productCRUD.disable(id, mode)
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