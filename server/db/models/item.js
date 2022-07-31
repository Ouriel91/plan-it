'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    itemId: DataTypes.STRING,
    eventId: DataTypes.STRING,
    itemName: DataTypes.STRING,
    bringName: DataTypes.STRING,
    quantity: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
    timestamps: false
  });
  return Item;
};