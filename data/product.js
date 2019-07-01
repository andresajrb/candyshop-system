let connection = require('./connection');

let product = {
    find: function(id) {

        return new Promise((resolve, reject) => {

            let query;

            if (id) {
                query = 'SELECT * FROM `inventario-ventas`.PRODUCTS WHERE PRODUCTID = ' + id.trim();
            } else {
                query = 'SELECT * FROM `inventario-ventas`.PRODUCTS ';
            }

            connection.query(query,

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


module.exports = product;