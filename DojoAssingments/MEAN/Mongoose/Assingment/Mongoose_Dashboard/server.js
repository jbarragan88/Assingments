// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Use native promises
mongoose.Promise = global.Promise;
// Require path
var path = require('path');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/dog');
var DogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    date: { type: Date, default: Date.now },
})
mongoose.model('Dog', DogSchema); 
var Dog = mongoose.model('Dog') 
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
    Dog.find({}, function(err, dogs) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.redirect('/')
        }
        else{
            console.log(dogs);
            var dogs_array = dogs;
            res.render('index', {dogs: dogs_array})
        }
      })
})
app.get('/dogs/new', function(req, res) {
    res.render('new');
})
app.post('/dogs', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var dog = new Dog({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    dog.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
        res.redirect('/');
      } 
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })
app.post('/dogs/:id', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Dog.find({_id: req.params.id}, function(err, dog) {
        var id = req.params.id;
        
        console.log("POST DATA", req.body);
        Dog.update({_id: req.params.id}, {$set: {name: req.body.name, age: req.body.age}}, function(err, dog){
            if(err){
                res.redirect('/dogs/edit/'+id)
            }
            else{
                console.log(dog);
                res.redirect('/dogs/'+id)
            }
        });
        //console.log(dog);
        //var id = req.params.id;
        //res.redirect('/dogs/'+id)


      })
})
app.get('/dogs/:id', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Dog.find({_id: req.params.id}, function(err, dogs) {
        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.redirect('/')
        }
        else{
            console.log(dogs);
            var dogs_array = dogs;
            res.render('view', {dog: dogs_array})
        }
      })
})
app.get('/dogs/edit/:id', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Dog.find({_id: req.params.id}, function(err, dogs) {
        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.redirect('/')
        }
        else{
            console.log(dogs);
            var dogs_array = dogs;
            res.render('edit', {dog: dogs_array})
        }
      })
})
app.get('/dogs/destroy/:id', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Dog.find({_id: req.params.id}, function(err, dogs) {
        Dog.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Wasn't able to delete shit from the database. I'm Done...")
                res.redirect('/')
            }
            else{
                console.log('Killing one dog at a time')
                res.redirect('/')
            }
        })
      })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
