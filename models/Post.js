var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	image: String,
	body: String,
	font: String,
	color: String,
	highlightColor: String,
	borderFont: String
});


module.exports = mongoose.model('Post', PostSchema);

