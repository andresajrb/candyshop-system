let connection = require('./connection');
const queries_util = require('../utils/queries.util');

module.exports = class Person {
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
        this.id = req.body.id;
        this.image = req.body.image;
        this.name = req.body.name.toUpperCase();
        this.lastname = req.body.lastname.toUpperCase();
        this.company = req.body.company.toUpperCase();
        this.address1 = req.body.address1.toUpperCase();
        this.address2 = req.body.address2.toUpperCase();
        this.phone1 = req.body.phone1;
        this.phone2 = req.body.phone2;
        this.email1 = req.body.email1;
        this.email2 = req.body.email2;
        this.kind = req.body.kind;
    }

    /**
     * 
     * Class Constructor
     * Construye el objeto pasandole el valor de los atributos como parametro
     */
    constructorPerson(id, image, name, lastname, company, address1, address2, phone1, phone2, email1, email2, kind) {

        this.id = req.body.id;
        this.image = req.body.image;
        this.name = req.body.name.toUpperCase();
        this.lastname = req.body.lastname.toUpperCase();
        this.company = req.body.company.toUpperCase();
        this.address1 = req.body.address1.toUpperCase();
        this.address2 = req.body.address2.toUpperCase();
        this.phone1 = req.body.phone1;
        this.phone2 = req.body.phone2;
        this.email1 = req.body.email1;
        this.email2 = req.body.email2;
        this.kind = req.body.kind;
    }

    /**
     * Return a Promise with all products in the Product Table
     */
    getPersons() {
        return new Promise((resolve, reject) => {


            connection.query(queries_util.getPerson,

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el objeto solicitado
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
    getPersonById(id) {
        return new Promise((resolve, reject) => {

            connection.query(queries_util.getPersonById, [id],

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el objeto solicitado
                    if (Object.keys(result).length === 0) {
                        resolve(null);
                    }
                    resolve(result);
                });
        });
    }

    /**
     * Return a Promise with all products in the Product Table filtering by Category
     */
    getClients() {
        return new Promise((resolve, reject) => {


            connection.query(queries_util.getClients,

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el objeto solicitado
                    if (Object.keys(result).length === 0) {
                        resolve(null);
                    }
                    resolve(result);
                });
        });
    }

    /**
     * Return a Promise with all products in the Product Table filtering by User
     */
    getProviders() {
        return new Promise((resolve, reject) => {


            connection.query(queries_util.getProviders,

                (err, resultset, fields) => {
                    if (err) {
                        reject('Query error:' + err.stack);

                    }
                    // Resultado en formato JSON
                    let result = JSON.parse(JSON.stringify(resultset));

                    // Si no se encuentra el objeto solicitado
                    if (Object.keys(result).length === 0) {
                        resolve(null);
                    }
                    resolve(result);
                });
        });
    }


    /**
     * Update Object after of constructorServiceUpdateInsert
     */
    update() {
        return new Promise((resolve, reject) => {

            this.getProductById(this.id).then(result => {
                if (result === null) {
                    reject('No existe un articulo con ese ID');
                }


                let imageUpdate = result[0].image;
                let nameUpdate = result[0].name.toUpperCase();
                let lastnameUpdate = result[0].lastname.toUpperCase();
                let companyUpdate = result[0].company.toUpperCase();
                let address1Update = result[0].address1.toUpperCase();
                let address2Update = result[0].address2.toUpperCase();
                let phone1Update = result[0].phone1;
                let phone2Update = result[0].phone2;
                let email1Update = result[0].email1;
                let email2Update = result[0].email2;
                let kindUpdate = result[0].kind;

                if (this.image) { imageUpdate = this.image };
                if (this.name) { nameUpdate = this.name };
                if (this.lastname) { lastnameUpdate = this.lastname };
                if (this.company) { companyUpdate = this.company };
                if (this.address1) { address1Update = this.address1 };
                if (this.address2) { address2Update = this.address2 };
                if (this.phone1) { phone1Update = this.phone1 };
                if (this.phone2) { phone2Update = this.phone2 };
                if (this.email1) { email1Update = this.email1 };
                if (this.email2) { email2Update = this.email2 };
                if (this.kind) { kindUpdate = this.kind };

                connection.query(queries_util.updatePerson, [imageUpdate, nameUpdate, lastnameUpdate, companyUpdate, address1Update,
                        address2Update, phone1Update, phone2Update, email1Update, email2Update, kindUpdate, this.id
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
     * Insert Object after of contructorServiceUpdateInsert
     */
    insert() {

        return new Promise((resolve, reject) => {

            connection.query(queries_util.insertPerson, [this.image, this.name, this.lastname, this.company, this.address1,
                    this.address2, this.phone1, this.phone2, this.email1, this.email2, this.kind
                ],

                (err, resultset) => {
                    if (err) {
                        reject('Query error:' + err.stack);
                    }

                    resolve({
                        image: this.image,
                        name: this.name,
                        lastname: this.lastname,
                        company: this.company,
                        address1: this.address1,
                        address2: this.address2,
                        phone1: this.phone1,
                        phone2: this.phone2,
                        email1: this.email1,
                        email2: this.email2,
                        kind: this.kind
                    })


                });
        });

    }
}