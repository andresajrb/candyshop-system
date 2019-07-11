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



let productCRUD = {

    update: function(id, name, description, brand, cost, price, isactive, providerid, userreg) {

        return new Promise((resolve, reject) => {

            productFind(id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }

                let nameUpdate = result[0].name;
                let desUpdate = result[0].description;
                let brandUpdate = result[0].brand;
                let costUpdate = result[0].cost;
                let priceUpdate = result[0].price;
                let isActUpdate = result[0].isactive;
                let proviUpdate = result[0].providerid;
                let userRegUpdate = result[0].userreg;

                if (name) { nameUpdate = name };
                if (description) { desUpdate = description };
                if (brand) { brandUpdate = brand };
                if (cost) { costUpdate = cost };
                if (price) { priceUpdate = price };
                if (isactive) { isActUpdate = isactive };
                if (providerid) { proviUpdate = providerid };
                if (userreg) { userRegUpdate = userreg };

                let query = " UPDATE `INVENTARIO-VENTAS`.PRODUCTS " +
                    " SET NAME = '" + nameUpdate + "'," +
                    " DESCRIPTION = '" + desUpdate + "'," +
                    " BRAND = '" + brandUpdate + "'," +
                    " COST = " + costUpdate + "," +
                    " PRICE = " + priceUpdate + "," +
                    " ISACTIVE = '" + isActUpdate + "'," +
                    " PROVIDERID = " + proviUpdate + "," +
                    " USERREG = " + userRegUpdate + " " +
                    " WHERE PRODUCTID = " + id + "";


                connection.query(query,

                    (err, resultset) => {
                        if (err) {
                            reject('Query error:' + err.stack);

                        }

                        if (resultset.affectedRows === 0) {
                            resolve(null);
                        }

                        resolve({
                            nameUpdate,
                            desUpdate,
                            brandUpdate,
                            costUpdate,
                            priceUpdate,
                            isActUpdate,
                            proviUpdate,
                            userRegUpdate
                        })

                    });


            }, (err) => {
                reject({
                    error: err.stack
                })
            });


        });




    },

    insert: function(name, description, brand, cost, price, isactive, providerid, userreg) {

        return new Promise((resolve, reject) => {
            console.log('hello');
            if (name === 'hello') {
                reject('error de prueba')
            }
            resolve('continuidad de prueba');
        });

    }
}


module.exports = {
    productFind,
    productCRUD
};