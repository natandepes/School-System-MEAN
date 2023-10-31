var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    number: {type: Int, required: true},
    workload: {type: Int, required: true},
    area: {type: String, required: true},


});

module.exports = mongoose.model('Course', schema);