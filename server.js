var Request = require('request');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var express = require('express');
var bodyParser = require("body-parser");

var logger = require('morgan');
//var mongojs = require("mongojs");
var mongoose = require("mongoose");

//wtf does this mean? this isn't what we did in class
//var databaseUrl = "location";
//var collections = "search";

//creating an instance of express
var app = express();
var PORT = process.env.PORT || 3000; //assigning the port or env var



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api + json"}));

//allows access to the public folder
app.use(express.static("./public"));


// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});


//create db connection

//database connected to TEST
//mongoose.connect('mongodb://localhost/test');
//heroku uri
//MONGODB_URI: mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q
var mongooseURI =  'mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q';
mongoose.connect(mongooseURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

	//create test schema
	var songSchema = mongoose.Schema({
		decade: String,
		artist: String,

	});

	var userName = 'testUser';

	var userSchema = userSchema.add({
		name: String,
		avatar: String,
		pages: Object
	});

	//create collection for users
	var User = mongoose.model('users', userSchema);

	//seed data
	var testUser = new User({
		name: 'testUser',
		avatar: 'http://images6.fanpop.com/image/photos/32100000/Random-photography-32132073-493-328.jpg',
	});


	//store docs in collection
	var Song = mongoose.model('songs', songSchema);
	//seed data
	var eighties = new Song({
		decade: '1980s',
		artist: 'The Cure'
	});

	//save
	var promise = eighties.save();
	var promise = testUser.save();
	
	//assert.ok(promise instanceof require('mpromise'));

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