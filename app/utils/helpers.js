var axios = require('axios');

var helpers = {


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
		return axios.get('/findPosts')
		.then(function(res) {
			console.log(res);
			//console.log('helping' + res);

			var posts = res.dataTypes;
			return posts

			//console.log('helpers' + posts);
		})
	},

	//page template
	// createPage: function(font, borderColor, title, text, image) {

	// 	//need to do this via parent function with .map()

	// 	var myPage = '<div className="col s12 m6 post">';
	// 	myPage += '<h4 className="title"> {title} </h4>';
	// 	myPage += '<p> {text} </p>';
	// 	myPage += '<img src={image} height="300" width="350"></img>';
	// 	myPage += '<p className="right"> {date} </p>';
	// 	myPage += '</div>';

	// }

};

module.exports = helpers;


