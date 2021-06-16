const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Cart extends Model { }

Cart.init({
  item: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, { sequelize, modelName: 'Cart' })

module.exports = Cart