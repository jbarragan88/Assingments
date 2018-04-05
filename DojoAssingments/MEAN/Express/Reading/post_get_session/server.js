var express = require("express");

var session = require('express-session');

var app = express();

// require body-parser
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({extended: true}));
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
//app.HTTP_VERB('URL', function (req, res){});   HTTP_VERB is either 'get' or 'post' etc...

app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
// route to process new user form data:
app.post('/users', function (req, res){
    req.session.name = req.body.email;
    console.log(req.session.name);
    //console.log("POST DATA \n\n", req.body)
    res.redirect('/');
  })
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
app.listen(8000, function(){
    console.log("listening on 8000");
});