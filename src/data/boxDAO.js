let connection = require('./connection');
const queries_util = require('../utils/queries.util');

module.exports = class Box {
    /**
     * @ Class Constructor
     */
    constructor() {}

    /**
     * Class Constructor auxiliar
     * Construye los atributos del objeto pasandole como parametro 
     * la variable req del servicio para construir el objeto
     * @param {*} req 
     */
    constructorServiceUpdateInsert(req) {
        this.id = req.body.id
    }

    /**
     * 
     * Class Constructor
     * Construye el objeto pasandole el valor de los atributos como parametro
     */
    constructorBox(id, created_at) {

        this.id = id;
        this.created_at = created_at;
    }

    /**
     * Return a Promise with all products in the Product Table
     */
    getBoxes() {
        return new Promise((resolve, reject) => {

            connection.query(queries_util.getBox,

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el registro solicitado
                    if (Object.keys(result).length === 0) {
                        resolve(null);
                    }
                    resolve(result);
                });
        });
    }


    /**
     * Insert object after of contructorServiceUpdateInsert
     */
    insert() {

        return new Promise((resolve, reject) => {

            connection.query(queries_util.insertBox,

                (err, resultset) => {
                    if (err) {
                        reject('Query error:' + err.stack);
                    }

                    resolve({
                        id: this.id,
                        created_at: this.created_at
                    })

                });
        });

    }
}