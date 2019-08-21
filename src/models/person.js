/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kind: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'person'
  });
};
