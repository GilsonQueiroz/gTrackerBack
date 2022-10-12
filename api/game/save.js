const restful = require('node-restful')
const mongoose = restful.mongoose

const saveSchema = new mongoose.Schema({
    game: { type: String, required: true },
    slug: { type: String, required: [true, 'necessário incluir um slug para endereçamento'] },
    initialDay: { type: Number, min: 0, required: true },
    actualDay: { type: Number, min: 0, required: true },
    actualTime: { type: Number, min: 0, default: 1 }
})

module.exports = restful.model('Save', saveSchema)