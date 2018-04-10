// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// configure body-parser to read JSON
app.use(bodyParser.json());
// Use native promises
mongoose.Promise = global.Promise;
// Require path
var path = require('path');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/people');
var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: { type: Date, default: Date.now },
})
mongoose.model('People', PeopleSchema); 
var People = mongoose.model('People') 
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the dogs from the database and include them in the view page we will be rendering.
    People.find({}, function(err, peoples) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(peoples);
            var peoples_array = peoples;
            res.json({message: "Success", data: peoples_array})
        }
      })
})

app.get('/new/:name', function(req, res) {
    var people = new People({name: req.params.name});
    people.save(function(err){
        if(err){
            console.log("Returned error", err);
            res.redirect('/')
        }
        else{
            console.log("Success Addition");
            res.redirect('/')
        }
    })
    
})

app.get('/remove/:name', function(req, res) {
    People.find({name: req.params.name}, function(err, peoples) { 
        People.remove({name: req.params.name}, function(err){
            if(err){
                console.log("Wasn't able to delete shit from the database. I'm Done...")
                res.redirect('/')
            }
            else{
                console.log('Killing one person at a time')
                res.redirect('/')
            }
        })
      })
})

app.get('/:name', function(req, res) {
    People.find({name: req.params.name}, function(err, peoples) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(peoples);
            var peoples_array = peoples;
            res.json({message: "Success", data: peoples_array})
        }
      })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})