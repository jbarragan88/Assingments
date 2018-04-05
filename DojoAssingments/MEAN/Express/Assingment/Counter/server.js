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
    //req.session.counter = 0;
    if (req.session.counter < 1){
        req.session.counter = 0;
    }
    req.session.counter += 1;
    console.log(req.session.counter);
    res.render("index", {counter:req.session.counter});
})
// post route for adding a user
app.get('/2', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 req.session.counter += 1;
 res.redirect('/');
})
app.get('/reset', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    req.session.counter = 0;
    res.redirect('/');
   })
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});