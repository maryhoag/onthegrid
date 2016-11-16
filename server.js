var Request = require('request');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var express = require('express');
var bodyParser = require("body-parser");

var logger = require('morgan');

//mongoose to handle mongodb
var mongoose = require('mongoose');
//for routing in reacat
var axios = require('axios');
var helpers =require('./app/utils/helpers.js');

//creating an instance of express
var app = express();
var PORT = process.env.PORT || 3000; //assigning the port or env var

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api + json"}));

//allows access to the public folder
app.use(express.static('./public'));

var api = require('./public/api.js');
app.post('/post', api.post);
app.get('/post/:title.:format?', api.show);
app.get('/post', api.list);

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

//create db connection

//database connected to TEST
// mongoose.connect('mongodb://localhost/test');
// mongoose.Promise = global.Promise;
//heroku uri

var mongooseURI =  'mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q'

mongoose.connect(mongooseURI);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

//process.env.MONGODB_URI;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

	console.log('mongoose connection successful');


});

var User = require('./models/User');
var Post = require('./models/Post');

//need axios
app.post("/user", function(req,res,next){
	var userInfo = req.body
	console.log('server' + req.body.text);

	var newPage = new Post(userInfo);

	newPage.save(function (err, savedObj) {
	  console.error(String(err)) 
	
	  console.log("server log");
	  res.send(savedObj);

	 });

});

app.get('/findUser', function(req, res, next) {
	var postSearch = req.body;
	var userName = postSearch.userName;
	console.log('server findUser' + req.body);

	//res.send(req.body)
});

app.get('/findPosts', function(req, res, next) {
	var postBundle = req.body;
	console.log(req.body);
	console.log('i ran too');

	Post.find() //users: userid
	//.limit(10)
	.sort({ date: -1 })
	.exec(function(err, posts) {
			if (err) { return console.error(err) }

				console.log('server sending');

				res.send(posts)
		});
 
});


app.listen(PORT, function() {
	//confirms app is listening and server is running
	console.log("listening on port %d", PORT);
});