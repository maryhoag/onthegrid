var axios = require('axios');

var helpers = {


	addContent: function() {
		return axios.post('/user')
			.then(function(response) {
				console.log(response);
			})
	},


	queryContent: function(userName) {
		//searches for a single user
		this.findOne({ 'name': 'testUser'}, function(err, person) {

			if(err) return handleError(err);
			console.log('%s', this.name);
		}) 
	},


	findContent: function(userName) {
		this.find(function(err, users) {
			if(err) return console.log(err);

			console.log(results);
		})
	}

};

module.exports = helpers;


