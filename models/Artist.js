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
  // },
  // username: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // password: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
},
{ timestamps: false, sequelize, modelName: 'artist' })

module.exports = Artist
