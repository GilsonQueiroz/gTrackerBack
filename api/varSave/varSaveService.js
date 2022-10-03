const _ = require('lodash')
const VarSave = require('./varSave')

VarSave.methods(['get', 'post', 'put', 'delete'])
VarSave.updateOptions({new: true, runValidators: true})

VarSave.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

module.exports = VarSave