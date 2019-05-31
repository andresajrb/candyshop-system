let connection = require('./connection');

let login = {
    autentication: function(username, password) {
        // connection.query('SELECT * FROM `inventario-ventas`.USERS WHERE USERNAME = "' +
        //     username + '" AND PASSWORD = "' + password + '"',
        //     (err, resultset, fields) => {
        //         if (err) {
        //             console.log('Query error:' + err.stack);
        //         }

        //         console.log(resultset);
        //     });

        connection.query('SELECT * FROM `inventario-ventas`.USERS ',
            (err, resultset, fields) => {
                if (err) {
                    console.log('Query error:' + err.stack);
                }

                result = JSON.parse(JSON.stringify(resultset));

                console.log(result);
            });
    }
}

module.exports = login;