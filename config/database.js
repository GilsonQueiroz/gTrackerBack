const mongoose = require('mongoose') //Importar module Mongoose - Banco de dados MongoDB

module.exports = mongoose.connect('mongodb+srv://userdata:qKta8ouKum1YhGlj@cluster0.gnmx1ae.mongodb.net/Qtracker?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true}).then(function(){
    console.log('banco de dados conectado');
}).catch(function(err){
    console.log(err.message);
})

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o campo '{PATH}'."