// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();


// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// configure body-parser to read JSON
app.use(bodyParser.json());

app.use(express.static( __dirname + '/apiApp/dist' ));

// Use native promises

// Require path
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

// Routes
// Root Request
//Show all tasks
app.get('/', function(req, res) {
    res.json({message: "Success"})
    //res.render('index')
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})