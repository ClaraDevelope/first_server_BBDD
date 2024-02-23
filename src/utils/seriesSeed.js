const mongoose = require('mongoose')
const SERIES = require('../api/models/series')
const seriesData = require('./seriesData')
mongoose
  .connect(
    'mongodb+srv://claramanzanocorona:WMr884NhB6oB4dux@cluster0.h52pw7w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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
// .finally(async () => {
//   await mongoose.disconnect()
//   console.log('desconectamos')
// })
