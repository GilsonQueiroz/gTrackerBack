const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //API game
    const saveService = require('../api/game/saveService')
    saveService.register(router,'/save')

    //API girls
    const girlService = require('../api/girl/girlService')
    girlService.register(router,'/girl')

    //API var-itens
    const varSaveService = require('../api/varSave/varSaveService')
    varSaveService.register(router,'/varsave')

    //API tasks
    const taskService = require('../api/task/taskService')
    taskService.register(router,'/task')

    //API tasks
    const timePlayService = require('../api/time/timePlayService')
    timePlayService.register(router,'/timeplay')
    
}