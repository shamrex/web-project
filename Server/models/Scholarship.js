const mongoose = require('mongoose')

const scholarshipSchema = new mongoose.Schema({
  name: String,
  country: String,
  type: String,
  levels: [String],
  fields: [String],
  maxIncomeLevel: String,
  minGPA: Number,
  deadline: String,
  link: String
})

module.exports = mongoose.model('Scholarship', scholarshipSchema)