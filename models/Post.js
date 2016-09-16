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
	title: String
});


module.exports = mongoose.model('Post', PostSchema);

