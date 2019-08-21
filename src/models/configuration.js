/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configuration', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    short: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    kind: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    val: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'configuration'
  });
};
