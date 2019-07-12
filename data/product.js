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

    update: function(id, name, description, brand, cost, price, isactive, providerid, userreg, quantity) {

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
                let quantityUpdate = result[0].quantity;

                if (name) { nameUpdate = name };
                if (description) { desUpdate = description };
                if (brand) { brandUpdate = brand };
                if (cost) { costUpdate = cost };
                if (price) { priceUpdate = price };
                if (isactive) { isActUpdate = isactive };
                if (providerid) { proviUpdate = providerid };
                if (userreg) { userRegUpdate = userreg };
                if (quantity) { quantityUpdate = quantity };

                let query = " UPDATE `INVENTARIO-VENTAS`.PRODUCTS " +
                    " SET NAME = '" + nameUpdate + "'," +
                    " DESCRIPTION = '" + desUpdate + "'," +
                    " BRAND = '" + brandUpdate + "'," +
                    " COST = " + costUpdate + "," +
                    " PRICE = " + priceUpdate + "," +
                    " ISACTIVE = '" + isActUpdate + "'," +
                    " PROVIDERID = " + proviUpdate + "," +
                    " USERREG = " + userRegUpdate + " ," +
                    " QUANTITY = " + quantityUpdate + " " +
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
                            userRegUpdate,
                            quantityUpdate
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

            let query = " INSERT INTO `INVENTARIO-VENTAS`.PRODUCTS " +
                " ( NAME, DESCRIPTION, BRAND, COST, PRICE, ISACTIVE, PROVIDERID, USERREG, QUANTITY, DATEREG, DATEENTRY) " +
                " VALUES( '" + name + "', " +
                " '" + description + "', " +
                " '" + brand + "', " +
                cost + ", " +
                price + ", " +
                " 'Y', " +
                providerid + ", " +
                userreg + ", " +
                " 0, CURRENT_DATE, CURRENT_DATE) ";

            connection.query(query,

                (err, resultset) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    console.log('El registro se inserto correctamente');

                    resolve({
                        name,
                        description,
                        brand,
                        cost,
                        price,
                        providerid,
                        userreg
                    })

                });
        });
    },

    disable: function(id, mode) {

        return new Promise((resolve, reject) => {

            productFind(id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }

                let query;

                if (parseInt(mode) === 1) {
                    query = " UPDATE `INVENTARIO-VENTAS`.PRODUCTS " +
                        " SET ISACTIVE = 'N' " +
                        " WHERE PRODUCTID = " + id + "";
                } else {
                    query = " UPDATE `INVENTARIO-VENTAS`.PRODUCTS " +
                        " SET ISACTIVE = 'Y' " +
                        " WHERE PRODUCTID = " + id + "";
                }

                connection.query(query,

                    (err, resultset) => {
                        if (err) {
                            reject('Query error:' + err.stack);
                        }

                        if (resultset.affectedRows === 0) {
                            resolve(null);
                        }

                        resolve({
                            active: mode
                        })
                    });

            }, (err) => {
                reject({
                    error: err.stack
                })
            });
        });
    }
}

module.exports = {
    productFind,
    productCRUD
};