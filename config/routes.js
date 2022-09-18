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

    //API game
    const varSaveService = require('../api/varSave/varSaveService')
    varSaveService.register(router,'/varsave')

    //API game
    const taskService = require('../api/task/taskService')
    taskService.register(router,'/task')
    
}