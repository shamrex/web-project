const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/scholarshipfinder')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err))

// Import routes
const scholarshipRoutes = require('./routes/scholarships')
app.use('/api/scholarships', scholarshipRoutes)

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000')
})