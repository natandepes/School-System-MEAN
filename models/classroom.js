var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    number: {type: Int, required: true},
    size: {type: Int, required: true},
    type: {type: String, required: true},
    resources: {type: String, required: true},
    lugares: {type: Int, required: true} // !!!!!!!!!!!!!!!!!!! 


});

module.exports = mongoose.model('Classroom', schema);