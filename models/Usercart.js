const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Usercart extends Model { }

Usercart.init({
  item: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'usercart' })

module.exports = Usercart
