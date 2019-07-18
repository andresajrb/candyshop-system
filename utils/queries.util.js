queries_util = {
    /** Autentication Query */
    loginAutentication: 'SELECT * FROM INVENTIOLITE.USER WHERE USERNAME = ? AND PASSWORD = ?',
    /** Products CRUD */
    getProducts: 'SELECT * FROM INVENTIOLITE.PRODUCT',
    getProductById: 'SELECT * FROM INVENTIOLITE.PRODUCT WHERE ID = ?',
    updateProduct: 'UPDATE INVENTIOLITE.PRODUCT SET IMAGE=?, BARCODE=?, NAME=?, DESCRIPTION=?, INVENTARY_MIN=?, PRICE_IN=?, PRICE_OUT=?, UNIT=?, PRESENTATION=?, CATEGORY_ID=? WHERE ID=?'
}

module.exports = queries_util;