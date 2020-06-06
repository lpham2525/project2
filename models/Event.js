const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Event extends Model { }

Event.init({
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'event' })

module.exports = Event
