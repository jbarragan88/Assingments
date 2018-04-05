// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index", {counter:req.session.counter});
})
// post route for adding a user
app.post('/student', function(req, res) {
    console.log("POST DATA", req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/result');
})
app.get('/result', function(req, res) {
    res.render("result", {name:req.session.name, location:req.session.location, language:req.session.language, comment:req.session.comment});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});