const router = require('express').Router()
const {Company} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const companies = await Company.findAll({
      attributes: [
        'Company ID',
        'Company Name',
        'Share Price Date',
        'Share Price',
        'Comments'
      ]
    })
    res.json(companies)
  } catch (err) {
    next(err)
  }
})
