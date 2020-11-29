const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Item extends Model { }

Item.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productUrl: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
  // artistName: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // artistId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true
  // },
  // eventId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true
  // }
}, { sequelize, modelName: 'item' })

module.exports = Item
