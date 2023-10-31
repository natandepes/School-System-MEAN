var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    quantity: {type: Int, required: true},
    shift: {type: String, required: true},
    frequency: {type: String, required: true},
    dateBegin: {type: Date, required: true},
    dateEnd: {type: String, required: false},
    status: {type: String, required: true},
});

module.exports = mongoose.model('Class', schema);