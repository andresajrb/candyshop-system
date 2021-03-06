/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'operation_type'
  });
};
