const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},
{ timestamps: false, sequelize, modelName: 'user' })

module.exports = User
