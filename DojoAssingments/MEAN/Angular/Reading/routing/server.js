// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

//*
//*
//
//*
//*
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.use(express.static( __dirname + '/routingApp/dist' ));
//*
//*
//
//*
//*
// Routes
// Root Request
//Show all tasks
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})