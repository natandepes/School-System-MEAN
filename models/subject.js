var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome: {type: String, required: true},
    worlkoad: {type: Int, required: true},



});

module.exports = mongoose.model('Subject', schema);