var request = require('request');

var express = require('express');
var bodyParser = require("body-parser");
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

app.use(express.static("./public"));

//database connected to TEST
mongoose.connect('mongodb://localhost/test');

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

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'


//GET route or in routes folder?

//POST route

//DELETE route


app.listen(PORT, function() {
	console.log("listening on port %d", PORT);
});