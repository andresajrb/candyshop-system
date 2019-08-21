/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    q: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    operation_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'operation_type',
        key: 'id'
      }
    },
    sell_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sell',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'operation'
  });
};
