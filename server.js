require('dotenv').config()
const express = require('express')
const { join } = require('path')
const imgur = require('imgur')
const app = express()

app.use(express.static(join(__dirname, '/public/')))
app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(require('./routes'))

require('./db')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000')))
  .catch((err) => console.error(err))

// app.use(express.static(join(__dirname, '/public/')))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
// app.set('view engine', '.hbs')

// app.use(require('./routes'))

app.get('/', function (req, res) {
  res.render('home')
})
