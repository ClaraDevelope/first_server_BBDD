const {
  getSeries,
  getSeriesById,
  getSeriesByGender,
  postSeries,
  deleteSeries
} = require('../controllers/series')

const seriesRouter = require('express').Router()

seriesRouter.get('/', getSeries)
seriesRouter.get('/:id', getSeriesById)
seriesRouter.get('/gender/:gender', getSeriesByGender)
seriesRouter.post('/', postSeries)
seriesRouter.delete('/:id', deleteSeries)

module.exports = { seriesRouter }
