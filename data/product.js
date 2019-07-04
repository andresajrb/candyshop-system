let connection = require('./connection');

function productFind(id) {

    return new Promise((resolve, reject) => {

        let query;

        if (id) {
            query = "SELECT * FROM `inventario-ventas`.PRODUCTS WHERE PRODUCTID = " + id.trim();
        } else {
            query = "SELECT * FROM `inventario-ventas`.PRODUCTS ";
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

// Crear una funcion de update que te permita tener varios tipos de update dependiendo de lo que se necesite
// tipo 1: name, description y brand
// tipo 2: cost y price
// tipo 3: isactive
// tipo 4: providerid

let productCRUD = {

    update: function(type, id, name, description, brand, cost, price, isactive, providerid) {

        return new Promise((resolve, reject) => {
            let result = productFind(id)[0];

            if (result) {

            } else {
                resolve(null);
            }

        });




    }
}


module.exports = {
    productFind,
    productCRUD
};