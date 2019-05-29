const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');


app.set('view engine', 'ejs');

app.use('/hola', express.static(path.join(__dirname, '../public/assets')));

app.get('/sent', function(req, res) {
    // res.sendFile('login.html', {
    //     root: path.join(__dirname, '../public/assets')
    // });

    // var myCss = {
    //     style: fs.readFileSync(path.join(__dirname, '../public/assets/css/style.css'), 'utf8')
    // };

    // res.render(
    //     path.join(__dirname, '../public/assets/login2.ejs'), { myCss: myCss });
});


module.exports = app;