const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Cart extends Model { }

Cart.init({
  item: DataTypes.STRING,
  quantity: DataTypes.INTEGER
}, { sequelize, modelName: 'cart' })

module.exports = Cart