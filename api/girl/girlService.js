const Girl = require('./girl')

Girl.methods(['get', 'post', 'put', 'delete'])
Girl.updateOptions({new: true, runValidators: true})

module.exports = Girl