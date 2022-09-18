const VarSave = require('./varSave')

VarSave.methods(['get', 'post', 'put', 'delete'])
VarSave.updateOptions({new: true, runValidators: true})

module.exports = VarSave