var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    cpf: {type: String, required: true},
    nome: {type: String, required: true},
    adress: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: false},
    subjects: [{type: Schema.Types.ObjectId, required: true }]
});

module.exports = mongoose.model('Student', schema);