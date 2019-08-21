/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('box', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'box'
  });
};
