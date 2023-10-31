var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quantity: {type: Int, required: true},
    shift: {type: String, required: true},
    frequency: {type: String, required: true},
    dateBegin: {type: Date, required: true},
    dateEnd: {type: String, required: false},
    status: {type: String, required: true},
});

module.exports = mongoose.model('Class', schema);