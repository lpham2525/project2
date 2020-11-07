const Artist = require('./Artist.js')
const Event = require('./Event.js')
const Item = require('./Item.js')
const User = require('./User.js')

Artist.hasMany(Item, { targetKey: 'userId', foreignKey: 'userId' })
Event.belongsTo(Artist)
Item.belongsTo(Artist)
User.hasMany(Item)

module.exports = { Artist, Event, Item, User }
