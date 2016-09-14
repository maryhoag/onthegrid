var axios = require('axios');

var helpers = {


	addContent: function(content) {
		return axios.post('/user', content)
			.then(function(response) {
				console.log('helpers ' + content);
				
			})
	},


	queryContent: function(userName) {
		//searches for a single user
		this.findOne({ 'name': 'testUser'}, function(err, person) {

			if(err) return handleError(err);
			//console.log('%s', this.name);
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


