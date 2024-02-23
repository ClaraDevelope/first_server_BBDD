const mongoose = require('mongoose')
const SERIES = require('../api/models/series')
const seriesData = require('./seriesData')
mongoose
  .connect(
    'mongodb+srv://series:jhFB2JketAtBrWZg@cluster0.kgkyttk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const series = await SERIES.find()
    if (series.length) {
      SERIES.collection.drop()
    }
    await SERIES.insertMany(seriesData)
    console.log('insertadas las nuevas series')
    console.log(seriesData)
  })
  .finally(async () => {
    await mongoose.disconnect()
    console.log('desconectamos')
  })
