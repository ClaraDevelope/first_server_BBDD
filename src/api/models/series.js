const mongoose = require('mongoose')
const seriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: String },
    gender: { type: String },
    image: { type: String, required: true }
  },
  {
    collection: 'series'
  }
)

const SERIES = mongoose.model('series', seriesSchema, 'series')
module.exports = SERIES
