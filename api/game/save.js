const restful = require('node-restful')
const mongoose = restful.mongoose

const gameSchema = new mongoose.Schema({
    game: { type: String, required: true },
    slug: { type: String, required: [true, 'necessário incluir um slug para endereçamento'] },
    initialDay: {type: Number, min: 0, required: true },
    ActualDay: {type: Number, min: 0, required: true }
})

module.exports = restful.model('Save', gameSchema)