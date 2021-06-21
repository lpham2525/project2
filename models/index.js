const Artist = require('./Artist.js')
const Cart = require('./Cart.js')
const Event = require('./Event.js')
const Item = require('./Item.js')
const User = require('./User.js')

Artist.hasMany(Item)
Event.belongsTo(Artist)
Item.belongsTo(Artist)
User.hasOne(Cart)
Cart.belongsTo(User)

module.exports = { Artist, Cart, Event, Item, User }

// Artist.hasMany(Item, { targetKey: 'userId', foreignKey: 'userId' })
