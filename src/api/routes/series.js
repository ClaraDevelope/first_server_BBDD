const {
  getSeries,
  getSeriesById,
  getSeriesByGender,
  postSeries,
  putSeries,
  deleteSeries
} = require('../controllers/series')

const seriesRouter = require('express').Router()

seriesRouter.get('/', getSeries)
seriesRouter.get('/:id', getSeriesById)
seriesRouter.get('/gender/:gender', getSeriesByGender)
seriesRouter.post('/', postSeries)
seriesRouter.put('/:id', putSeries)
seriesRouter.delete('/:id', deleteSeries)

module.exports = { seriesRouter }
