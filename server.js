var request = require('request');

var express = require('express');
var bodyParser = require("body-parser");

var logger = require('morgan');
//var mongojs = require("mongojs");
var mongoose = require("mongoose");

//wtf does this mean? this isn't what we did in class
var databaseUrl = "location";
var collections = "search";

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

//database connected to TEST
mongoose.connect('mongodb://localhost/test');

//create db connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});

//database test data
var kittySchema = mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

kittySchema.methods.hi = function() {
	console.log('hiya');
}


//new model
var Kitten = mongoose.model('Kitten', kittySchema);

//creates new kitten
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

//silence.speak();

silence.hi();

//actually saves the kitten to the db
silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.speak();
  console.log('hi');
});


//Kitten.find({ name: /^Silence/ }, callback);


//GET route or in routes folder?

//POST route

//DELETE route


app.listen(PORT, function() {
	console.log("listening on port %d", PORT);
});