const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Artist extends Model { }

Artist.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  artistPhoto: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
{ sequelize, modelName: 'artist' })

module.exports = Artist
