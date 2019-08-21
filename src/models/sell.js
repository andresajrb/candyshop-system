/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sell', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    person_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    operation_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '2',
      references: {
        model: 'operation_type',
        key: 'id'
      }
    },
    box_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'box',
        key: 'id'
      }
    },
    total: {
      type: "DOUBLE",
      allowNull: true
    },
    cash: {
      type: "DOUBLE",
      allowNull: true
    },
    discount: {
      type: "DOUBLE",
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sell'
  });
};
