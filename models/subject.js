var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    nome: {type: String, required: true},
    worlkoad: {type: Int, required: true},



});

module.exports = mongoose.model('Subject', schema);