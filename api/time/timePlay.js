const restful = require('node-restful')
const mongoose = restful.mongoose

const timePlaySchema = new mongoose.Schema({
    timeName: { type: String, required: true },
    timeOrder: { type: Number, min: 1, default: 1 }
})

module.exports = restful.model('TimePlay', timePlaySchema)