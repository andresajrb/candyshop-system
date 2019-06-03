let connection = require('./connection');

let login = {
    // True - Encontro el usuario solicitado  False - No se encontro el usuario solicitadoS
    autentication: function(username, password) {

        return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM `inventario-ventas`.USERS WHERE USERNAME = "' +
                username + '" AND PASSWORD = "' + password + '"',

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el usuario solicitado
                    if (Object.keys(result).length === 0) {
                        reject(false);
                    }
                    resolve('Usuario y contraseña aceptada');
                });

        });

    }
}

module.exports = login;