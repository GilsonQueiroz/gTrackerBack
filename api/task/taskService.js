const _ = require('lodash')
const Task = require('./task')

Task.methods(['get', 'post', 'put', 'delete'])
Task.updateOptions({new: true, runValidators: true})

Task.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

Task.route('count', function(req,res,next) {
    Task.count({ slug: req.query.slug},function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

Task.route('dashboard', function(req,res,next) {
    Task.find({slug : req.query.slug, 'timeLocals.time' : req.query.period , taskDisponible : true, nextDay : { $lte: req.query.day }, maxDay : { $gte: req.query.day } })
    .sort('codTask')
    .skip(req.query.skip)
    .limit(req.query.limit)
    .exec(function(error, resultados){
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({resultados})
        }
    })
})

Task.route('countdash', function(req,res,next) {
    Task.count({slug : req.query.slug, 'timeLocals.time' : req.query.period , taskDisponible : true, nextDay : { $lte: req.query.day }, maxDay : { $gte: req.query.day } },function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

Task.route('complete', function(req,res,next) {
    Task.find({ 'requirements.codTask' : req.query.quest })
    .exec(function(error, resultados){
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({resultados})
        }
    })
})


module.exports = Task