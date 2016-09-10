//var User = require('../../models/User.js');
//var Post = require('../../models/Post.js');

var addContent = function(content) {

	var post = new Post(content);

	Post.add({ body: content });
};


var queryContent = function(userName) {
	//searches for a single user
	this.findOne({ 'name': 'testUser'}, function(err, person) {

		if(err) return handleError(err);
		console.log('%s', this.name);
	}) 
};


var findContent = function(userName) {
	this.find(function(err, users) {
		if(err) return console.log(err);

		console.log(results);
	})
};
