let connection = require('./connection');
const queries_util = require('../utils/queries.util');

module.exports = class Category {
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
        this.image = req.body.image
        this.name = req.body.name.toUpperCase()
        this.description = req.body.description.toUpperCase()
    }

    /**
     * 
     * Class Constructor
     * Construye el objeto pasandole el valor de los atributos como parametro
     */
    constructorCategory(id, image, name, description) {

        this.id = id;
        this.image = image;
        this.name = name.toUpperCase();
        this.description = description.toUpperCase();
    }

    /**
     * Return a Promise with all products in the Product Table
     */
    getCategories() {
        return new Promise((resolve, reject) => {

            connection.query(queries_util.getCategory,

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
     * Return a Promise with all objects in the Table filtering by ID
     */
    getCategoryById(id) {
        return new Promise((resolve, reject) => {

            connection.query(queries_util.getCategoryById, [id],

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

    /**
     * Update object after of constructorServiceUpdateInsert
     */
    update() {
        return new Promise((resolve, reject) => {

            this.getCategoryById(this.id).then(result => {
                if (result === null) {
                    reject('No existe una categoria con ese ID');
                }

                let imageUpdate = result[0].image;
                let nameUpdate = result[0].name;
                let descriptionUpdate = result[0].description;

                if (this.image) { imageUpdate = this.image };
                if (this.name) { nameUpdate = this.name };
                if (this.description) { descriptionUpdate = this.description };

                connection.query(queries_util.updateCategory, [imageUpdate, nameUpdate, descriptionUpdate, this.id],

                    (err, resultset) => {

                        if (err) {
                            reject('Query error:' + err.stack);
                        }

                        if (resultset) {
                            if (resultset.affectedRows === 0) {
                                resolve(null);
                            }

                            resolve({
                                id: this.id,
                                name: this.name,
                                description: this.description
                            })

                        } else {
                            reject('Error al actualizar registro');
                        }

                    });

            }, (err) => {
                reject({
                    error: err.stack
                })
            });
        });
    }

    /**
     * Insert object after of contructorServiceUpdateInsert
     */
    insert() {

        return new Promise((resolve, reject) => {

            connection.query(queries_util.insertCategory, [this.image, this.name, this.description],

                (err, resultset) => {
                    if (err) {
                        reject('Query error:' + err.stack);
                    }

                    resolve({
                        image: this.image,
                        name: this.name,
                        description: this.description,
                    })

                });
        });

    }
}