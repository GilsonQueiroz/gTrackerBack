const mongoose = require('mongoose') //Importar module Mongoose - Banco de dados MongoDB

module.exports = mongoose.connect('mongodb+srv://userdata:qKta8ouKum1YhGlj@cluster0.gnmx1ae.mongodb.net/Qtracker?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true}).then(function(){
    console.log('banco de dados conectado');
}).catch(function(err){
    console.log(err.message);
})
