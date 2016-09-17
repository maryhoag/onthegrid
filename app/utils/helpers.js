var axios = require('axios');

var helpers = {

	addUser: function(userObject) {

		return axios.post('/userLogin', userObject)
			.then(function(resposne) {

			})
	},

	addContent: function(contentObj) {
		//takes input object from React and sends to db
		return axios.post('/user', contentObj)
			.then(function(response) {
				//confirms success
				console.log('helpers ' + response);
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
	findContent: function() {
		//instead of name should search by user id? deleted params for username
		console.log('find me');
		return axios.get('/findPosts')
		.then(function(res) {
			console.log('res is',res);

			var posts = res.data;
			//console.log('helping' + res);
			return posts
		})
	},

};

module.exports = helpers;
