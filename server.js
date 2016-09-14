var Request = require('request');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var express = require('express');
var bodyParser = require("body-parser");

var logger = require('morgan');
//var mongojs = require("mongojs");
var mongoose = require('mongoose');
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
mongoose.connect('mongodb://localhost/test');
//heroku uri
//MONGODB_URI: mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q
// var mongooseURI =  'mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q';
// mongoose.connect(mongooseURI);

var db = mongoose.connection;

//process.env.MONGODB_URI;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

	console.log('mongoose connection successful');



	//create user schema
	// var userSchema = mongoose.Schema({
	// 	name: String,
	// 	other: String,

	// });

	// var userName = 'testUser';

	// var userSchema = mongoose.Schema({
	// 	name: String, //required: true },
	// 	avatar: String,
	// 	//TODO add: font, color, img
	// 	//pages: [ {body: String, date: Date, default: Date.now} ]
	// });

	// //create collection for users
	// var User = mongoose.model('users', userSchema);

	// //seed data
	// var testUser = new User({
	// 	name: 'testUser',
	// 	avatar: 'http://images6.fanpop.com/image/photos/32100000/Random-photography-32132073-493-328.jpg',
	// });

	//testUser.add({ pages: 'content here' });


	//store docs in collection
	// var Song = mongoose.model('songs', songSchema);
	// //seed data
	// var eighties = new Song({
	// 	decade: '1980s',
	// 	artist: 'The Cure'
	// });

	//save
	//var promise = eighties.save();
	//var promise = testUser.save();

	//assert.ok(promise instanceof require('mpromise'));

});




var User = require('./models/User');
var Post = require('./models/Post');

//need axios
app.post("/user", function(req,res,next){
	var userInfo = req.body;
	console.log('server' + req.body);

	res.send(req.body);
	//res.render('./public/');

	//var newUser = new User(userInfo);
	//console.log('there is a new user' + userInfo);
	var newPage = new Post(userInfo);

	newPage.save(function (err) {
	  console.error(String(err)) 
	
	  console.log("server log");

	 });

});

// 	mongoose.connection.db.close(err) {
// 		if(err) throw err;
// 	}
// });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('we are connected');
// });

// //database test data
// var kittySchema = mongoose.Schema({
//     name: String
// });


// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

// kittySchema.methods.hi = function() {
// 	console.log('hiya');
// }


// //new model
// var Kitten = mongoose.model('Kitten', kittySchema);

// //creates new kitten
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

//silence.speak();

// silence.hi();

// //actually saves the kitten to the db
// silence.save(function (err, silence) {
//   if (err) return console.error(err);
//   silence.speak();
//   console.log('hi');
// });

// //Kitten.find({ name: /^Silence/ }, callback);


// var kittySchema = mongoose.Schema({
//     name: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

//GET route or in routes folder?

//POST route

//DELETE route


app.listen(PORT, function() {
	console.log("listening on port %d", PORT);
});