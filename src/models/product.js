/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
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
    barcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inventary_min: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '10'
    },
    price_in: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price_out: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    presentation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'product'
  });
};
