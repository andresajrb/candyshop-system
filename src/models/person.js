const Sequelize = require('sequelize');
const sequelize = require('../server/connection2');
const Model = Sequelize.Model;

class Person extends Model {}
Person.init({
    image: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    address1: {
        type: Sequelize.STRING
    },
    address2: {
        type: Sequelize.STRING
    },
    phone1: {
        type: Sequelize.STRING
    },
    phone2: {
        type: Sequelize.STRING
    },
    email1: {
        type: Sequelize.STRING
    },
    email2: {
        type: Sequelize.STRING
    },
    kind: {
        type: Sequelize.INTEGER
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    sequelize,
    modelName: 'person',
    freezeTableName: true,
    timestamps: false

});

Person.sync();

module.exports = Person;