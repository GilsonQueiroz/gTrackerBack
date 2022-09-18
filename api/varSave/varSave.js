const restful = require('node-restful')
const mongoose = restful.mongoose

const varSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    initial: {type: Number, min: 0, required: true },
    value: {type: Number, min: 0, required: true }
})

module.exports = restful.model('VarSave', varSchema)