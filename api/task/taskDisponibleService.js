const _ = require('lodash')
const Task = require('./task')

function getReqTrue(req, res) {
    Task.aggregate({
        $project: {reqTrue: {$allElementsTrue: "requirements.taskComplete" }}
    })
}