const { shift } = require('core-js/core/array');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    quantity: {type: Int, required: true},
    shift: {type: String, required: true},
    frequency: {type: String, required: true},
    dateBegin: {type: Date, required: true},
    dateEnd: {type: String, required: false},
    status
});

module.exports = mongoose.model('Message', schema);