const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  'Company ID': {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
      //unique?
    }
  },
  'Company Name': {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  'Share Price Date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  'Share Price': {
    type: Sequelize.DECIMAL(10, 3)
  },
  Comments: {
    type: Sequelize.TEXT
  }
})

module.exports = Company
