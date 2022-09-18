const Save = require('./save')

Save.methods(['get', 'post', 'put', 'delete'])
Save.updateOptions({new: true, runValidators: true})

module.exports = Save