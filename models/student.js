var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    cpf: {type: String, required: true},
    nome: {type: String, required: true},
    adress: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: false}



});

module.exports = mongoose.model('Student', schema);