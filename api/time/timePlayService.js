const _ = require('lodash')
const TimePlay = require('./timePlay')

TimePlay.methods(['get', 'post', 'put', 'delete'])
TimePlay.updateOptions({new: true, runValidators: true})

TimePlay.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

module.exports = TimePlay