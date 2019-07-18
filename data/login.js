const connection = require('./connection');
const queries_util = require('../utils/queries.util');

let login = {
    // True - Encontro el usuario solicitado  False - No se encontro el usuario solicitadoS
    autentication: function(username, password) {

        return new Promise((resolve, reject) => {

            connection.query(queries_util.loginAutentication, [username, password],

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el usuario solicitado
                    if (Object.keys(result).length === 0) {
                        resolve(null);
                    }
                    resolve(result);
                });

        });

    }
}

module.exports = login;