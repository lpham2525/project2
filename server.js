require('dotenv').config()
const express = require('express')
const { join } = require('path')
// const imgur = require('imgur')

const exphbs = require('express-handlebars')

const app = express()

// Initialize handlebars
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// TODO these are weird lines??
app.use(express.static(join(__dirname, 'public')))
app.use('/assets', express.static(join(__dirname, 'assets')))
app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// TODO: also weird
app.use(require('./routes'))

require('./db')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000')))
  .catch((err) => console.error(err))
