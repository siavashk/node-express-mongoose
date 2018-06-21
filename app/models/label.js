var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LabelSchema = new Schema({
    study: { type: String, default: '' },
    filename: { type: String, default: '' },
    label: { type: String, default: '' }
});

mongoose.model('Label', LabelSchema);
