const express = require('express')
require('dotenv').config()
const { connectDB } = require('./src/config/db.js')
const { seriesRouter } = require('./src/api/routes/series.js')
const SERIES = require('./src/api/models/series.js')
connectDB()
const PORT = 3030
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/series', seriesRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

app.listen(PORT, () => {
  console.log('estamos escuchando el puerto en http://localhost:' + PORT)
})
