

var addContent = function(content) {

	this.add({ pages: content });
};


var queryContent = function(userName) {
	//searches for a single user
	this.findOne({ 'name': 'testUser'} function(err, person) {

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
