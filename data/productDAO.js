let connection = require('./connection');
const queries_util = require('../utils/queries.util');

module.exports = class Product {
    constructor() {}

    constructorServiceUpdateInsert(req) {
        this.id = req.body.id
        this.image = req.body.image
        this.barcode = req.body.barcode
        this.name = req.body.name
        this.description = req.body.description
        this.inventary_min = req.body.inventary_min
        this.price_in = req.body.price_in
        this.price_out = req.body.price_out
        this.unit = req.body.unit
        this.presentation = req.body.presentation
        this.user_id = req.body.user_id
        this.category_id = req.body.category_id
    }

    constructorProduct(id, image, barcode, name, description, inventary_min,
        price_in, price_out, unit, presentation, user_id, category_id) {

        this.id = id;
        this.image = image;
        this.barcode = barcode;
        this.name = name;
        this.description = description;
        this.inventary_min = inventary_min;
        this.price_in = price_in;
        this.price_out = price_out;
        this.unit = unit;
        this.presentation = presentation;
        this.user_id = user_id;
        this.category_id = category_id;
    }

    static getProducts() {
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

    static getProductById(id) {
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

    update() {
        return new Promise((resolve, reject) => {

            this.getProductById(this.id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }

                console.log(result[0]);

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

                connection.query(queries_util.updateProduct, [imageUpdate, barcodeUpdate, nameUpdate, descriptionUpdate, inventary_minUpdate,
                        price_inUpdate, price_outUpdate, unitUpdate, presentationUpdate
                    ],

                    (err, resultset) => {

                        if (err) {
                            reject('Query error:' + err.stack);
                        }

                        if (resultset.affectedRows === 0) {
                            resolve(null);
                        }

                        resolve(this)
                    });

            }, (err) => {
                reject({
                    error: err.stack
                })
            });
        });
    }
}