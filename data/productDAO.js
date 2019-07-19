let connection = require('./connection');
const queries_util = require('../utils/queries.util');

module.exports = class Product {
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
        this.barcode = req.body.barcode
        this.name = req.body.name.toUpperCase()
        this.description = req.body.description.toUpperCase()
        this.inventary_min = req.body.inventary_min
        this.price_in = req.body.price_in
        this.price_out = req.body.price_out
        this.unit = req.body.unit.toUpperCase()
        this.presentation = req.body.presentation.toUpperCase()
        this.user_id = req.body.user_id
        this.category_id = req.body.category_id
    }

    /**
     * 
     * Class Constructor
     * Construye el objeto pasandole el valor de los atributos como parametro
     */
    constructorProduct(id, image, barcode, name, description, inventary_min,
        price_in, price_out, unit, presentation, user_id, category_id) {

        this.id = id;
        this.image = image;
        this.barcode = barcode;
        this.name = req.body.name.toUpperCase()
        this.description = req.body.description.toUpperCase()
        this.inventary_min = req.body.inventary_min
        this.price_in = req.body.price_in
        this.price_out = req.body.price_out
        this.unit = req.body.unit.toUpperCase()
        this.presentation = req.body.presentation.toUpperCase()
        this.user_id = user_id;
        this.category_id = category_id;
    }

    /**
     * Return a Promise with all products in the Product Table
     */
    getProducts() {
        return new Promise((resolve, reject) => {


            connection.query(queries_util.getProducts,

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
     * Return a Promise with all products in the Product Table filtering by ID
     */
    getProductById(id) {
        return new Promise((resolve, reject) => {

            connection.query(queries_util.getProductById, [id],

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
     * Update Product after of constructorServiceUpdateInsert
     */
    update() {
        return new Promise((resolve, reject) => {

            this.getProductById(this.id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }

                let imageUpdate = result[0].image;
                let barcodeUpdate = result[0].barcode;
                let nameUpdate = result[0].name;
                let descriptionUpdate = result[0].description;
                let inventary_minUpdate = result[0].inventary_min;
                let price_inUpdate = result[0].price_in;
                let price_outUpdate = result[0].price_out;
                let unitUpdate = result[0].unit;
                let presentationUpdate = result[0].presentation;
                let category_idUpdate = result[0].category_id;

                if (this.image) { imageUpdate = this.image };
                if (this.barcode) { barcodeUpdate = this.barcode };
                if (this.name) { nameUpdate = this.name };
                if (this.description) { descriptionUpdate = this.description };
                if (this.inventary_min) { inventary_minUpdate = this.inventary_min };
                if (this.price_in) { price_inUpdate = this.price_in };
                if (this.price_out) { price_outUpdate = this.price_out };
                if (this.unit) { unitUpdate = this.unit };
                if (this.presentation) { presentationUpdate = this.presentation };
                if (this.category_id) { category_idUpdate = this.category_id };

                connection.query(queries_util.updateProduct, [imageUpdate, barcodeUpdate, nameUpdate, descriptionUpdate,
                        inventary_minUpdate, price_inUpdate, price_outUpdate, unitUpdate, presentationUpdate, category_idUpdate,
                        this.id
                    ],

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
     * Insert Product after of contructorServiceUpdateInsert
     */
    insert() {

        return new Promise((resolve, reject) => {

            connection.query(queries_util.insertProduct, [this.image, this.barcode, this.name, this.description, this.inventary_min,
                    this.price_in, this.price_out, this.unit, this.presentation, this.user_id, this.category_id
                ],

                (err, resultset) => {
                    if (err) {
                        reject('Query error:' + err.stack);
                    }


                    resolve({
                        image: this.image,
                        barcode: this.barcode,
                        name: this.name,
                        description: this.description,
                        inventary_min: this.inventary_min,
                        price_in: this.price_in,
                        price_out: this.price_out,
                        unit: this.unit,
                        presentation: this.presentation,
                        user_id: this.user_id,
                        category_id: this.category_id
                    })


                });
        });

    }

    disable(mode) {
        return new Promise((resolve, reject) => {

            this.getProductById(this.id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }


                connection.query(queries_util.disableProduct, [mode, this.id],

                    (err, resultset) => {

                        if (err) {
                            reject('Query error:' + err.stack);
                        }

                        if (resultset) {
                            if (resultset.affectedRows === 0) {
                                resolve(null);
                            }

                            resolve({
                                id: result[0].id,
                                name: result[0].name,
                                description: result[0].description,
                                is_active: mode
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
}