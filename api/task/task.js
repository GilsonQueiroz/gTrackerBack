const restful = require('node-restful')
const mongoose = restful.mongoose

const requirementSchema = new mongoose.Schema({
    codTask: { type: String },
    taskComplete: { type: Boolean }
})

const timeLocationSchema = new mongoose.Schema({
    time: { type: Number },
    local: { type: String, uppercase: true }
})

const taskSchema = new mongoose.Schema({
    slug: { type: String, required: true },
    codTask: { type: String, required: true },
    quest: { type: String, required: true },
    task: { type: String, required: true },
    minDay: { type: Number, min: 0, default: 0 },
    nextDay: { type: Number, min: 0, default: 0 },
    maxDay: { type: Number, max: 9999, default: 9999 },
    interval: {type: Number, min: 0, default: 0 },
    periodEnd: { type: Boolean, default: false },
    taskComplete: { type: Boolean, default: false },
    taskDisponible: { type: Boolean, default: true },
    taskRepeat: { type: Boolean, default: false },
    taskRequire: { type: String },
    timeLocals: [timeLocationSchema],
    requirements: [requirementSchema],
    updates: { type: String },
    group: { type: String}
})

module.exports = restful.model('Task', taskSchema)