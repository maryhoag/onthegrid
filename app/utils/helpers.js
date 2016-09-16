var axios = require('axios');

var helpers = {


	addContent: function(contentObj) {
		return axios.post('/user', contentObj)
			.then(function(response) {
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
	},

	//page template
	createPage: function(font, borderColor, title, text, image) {

		//need to do this via parent function with .map()

		var myPage = '<div className="col s12 m6 post">';
		myPage += '<h4 className="title"> {title} </h4>';
		myPage += '<p> {text} </p>';
		myPage += '<img src={image} height="300" width="350"></img>';
		myPage += '<p className="right"> {date} </p>';
		myPage += '</div>';

	}

};

module.exports = helpers;


