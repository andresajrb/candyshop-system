const Sequelize = require('sequelize');

const sequelize = new Sequelize('INVENTIOLITE', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => {
        console.log('La conexion 2 a la base de datos se hizo correctamente');
    })
    .catch(err => {
        console.log('Error en la conexion 2 de la base de datos', err);
    });

module.exports = sequelize;