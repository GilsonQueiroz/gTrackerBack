const restful = require('node-restful')
const mongoose = restful.mongoose

const requirementSchema = new mongoose.Schema({
    codTask: { type: String, required: true },
    taskComplete: { type: Boolean, default: false }
})

const timeLocationSchema = new mongoose.Schema({
    local: { type: String, required: true },
    time: { type: String, required: true, uppercase: true }
})

const taskSchema = new mongoose.Schema({
    slug: { type: String, required: true },
    codTask: { type: String, required: true },
    quest: { type: String, required: true },
    task: { type: String, required: true },
    minDay: { type: Number, min: 0, default: 0 },
    lastDay: { type: Number, min: 0, default: 0 },
    maxDay: { type: Number, max: 9999, default: 9999 },
    taskComplete: { type: Boolean, default: false },
    taskDisponible: { type: Boolean, default: true },
    taskRepeat: { type: Boolean, default: false },
    timeLocals: [timeLocationSchema],
    requirements: [requirementSchema]
})

module.exports = restful.model('Task', taskSchema)