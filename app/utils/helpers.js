var axios = require('axios');

var helpers = {


	addContent: function(content) {
		return axios.post('/user', content)
			.then(function(response) {
				console.log('helpers ' + content);
				
			})
	},

	//finds user name
	queryUser: function(userName) {
		//searches for a single user
		return axios.get('/findUser', name)
		.then(function(response) {
			console.log('' + name);
		})
		// // this.findOne({ 'name': 'testUser'}, function(err, person) {

		// // 	if(err) return handleError(err);
		// // 	//console.log('%s', this.name);
		// }) 
	},

	//finds user content
	findContent: function(userName) {
		//instead of name should search by user id?
		return axios.get('/findPosts', name)
		.then(function(response) {
			console.log('')
		})
		this.find(function(err, users) {
			if(err) return console.log(err);

			console.log(results);
		})
	}

};

module.exports = helpers;


