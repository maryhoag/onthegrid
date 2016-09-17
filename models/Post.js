var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	//object_id: ObjectId,
	image: String,
	text: String,
	font: String,
	color: String,
	highlightColor: String,
	borderFont: String,
	title: String,
	date: String
});


module.exports = mongoose.model('Post', PostSchema);

