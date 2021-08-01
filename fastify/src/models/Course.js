const mongoose = require('mongoose')

courseSchema = new mongoose.Schema({
    name: String,
    price: String,
    subtitle: String,
    releaseYear: Number
})

module.exports = mongoose.model('Course', courseSchema);