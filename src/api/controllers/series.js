const SERIES = require('../models/series')

const getSeries = async (req, res, netxt) => {
  try {
    const series = await SERIES.find()
    return res.json(series)
  } catch (error) {
    return res.status(400).json('Error al hacer el get')
  }
}
const getSeriesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const series = await SERIES.findById(id)
    return res.json(series)
  } catch (error) {
    return res.status(400).json('Error al hacer el get por ID')
  }
}
const getSeriesByGender = async (req, res, next) => {
  try {
    const { gender } = req.params
    const series = await SERIES.find({ gender })
    return res.json(series)
  } catch (error) {
    return res.status(400).json('Error al hacer el get por género')
  }
}
const postSeries = async (req, res, next) => {
  try {
    const newSerie = new SERIES(req.body)
    const serie = await newSerie.save()
    return res.status(201).json(serie)
  } catch (error) {
    return res.status(400).json('Error al hacer el post de las series')
  }
}

const putSeries = async (req, res, next) => {
  try {
    const { id } = req.params
    const serieModify = new SERIES(req.body)
    serieModify._id = id
    const serieUpdated = await SERIES.findByIdAndUpdate(id, serieModify)
    return res.status(200).json(serieUpdated)
  } catch (error) {
    return res.status(400).json('Error al hacer el get')
  }
}
const deleteSeries = async (req, res, next) => {
  try {
    const { id } = req.params
    const serie = await SERIES.findByIdAndDelete(id)
    return res.json(serie)
  } catch (error) {
    return res.status(400).json('Error al hacer el delete')
  }
}

module.exports = {
  getSeries,
  getSeriesByGender,
  getSeriesById,
  postSeries,
  putSeries,
  deleteSeries
}
