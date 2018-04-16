// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

//*
//*
//
//*
//*
// Use native promises
mongoose.Promise = global.Promise;
// Require path
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/task');
var TaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: "_"},
    completed: {type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})
mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task') 

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.use(express.static( __dirname + '/myFirstAngularApp/dist' ));
//*
//*
//
//*
//*
// Routes
// Root Request
//Show all tasks
app.get('/', function(req, res) {
    // This is where we will retrieve the dogs from the database and include them in the view page we will be rendering.
    Task.find({}, function(err, tasks) { 
        if(err){
            console.log("First Route: Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(tasks);
            var tasks_array = tasks;
            res.json({message: "Success", data: tasks_array})
            //res.render("index", {message: "Success", data: tasks_array})
        }
      })
})
app.get('/tsk', function(req, res) {
    // This is where we will retrieve the dogs from the database and include them in the view page we will be rendering.
    Task.find({}, function(err, tasks) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(tasks);
            var tasks_array = tasks;
            res.json({message: "Success", data: tasks_array})
            //res.render("index", {message: "Success", data: tasks_array})
        }
      })
})
//creat new task
app.get('/task/:title/:description', function(req, res) {
    console.log("Creating ...", req.params.title)
    var task = new Task({title: req.params.title, description: req.params.description});
    task.save(function(err){
        if(err){
            console.log("Returned error", err);
            res.json({message: "Error", err})
        }
        else{
            console.log("Success Addition");
            res.json({message: "Success"})
        }
    })
    
})
//delete task
app.get('/remove/:id', function(req, res) {
    console.log("node remove id:", req.params.id)
    Task.find({_id: req.params.id}, function(err, tasks) { 
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Wasn't able to delete shit from the database. I'm Done...")
                res.redirect('/')
            }
            else{
                console.log('Killing one task at a time')
                res.json({message: "Success", data: tasks})
            }
        })
      })
})
//update/task
app.get('/update/:id/:title/:description',  function(req, res) {
    console.log("The Title?:", req.params.title)
    Task.find({_id: req.params.id}, function(err, tasks) { 
        Task.update({_id: req.params.id}, {$set: {title: req.params.title, description: req.params.description,completed: req.body.completed}}, function(err, task){
            var id = req.params.id;
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                console.log(task);
                res.json({message: "Success", data: tasks})
            }
        });
      })
})

//view task
app.get('/find/:id', function(req, res) {
    console.log("HERERERERERERE")
    Task.findOne({_id: req.params.id}, function(err, tasks) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(tasks);
            var tasks_array = tasks;
            res.json({message: "Success", data: tasks_array})
        }
      })
})
app.get('/:title', function(req, res) {
    console.log("this is the parameter", req.params.title)
    Task.find({title: req.params.title}, function(err, tasks) { 
        if(err){
            console.log("By Task: Wasn't able to retrive shit from the database. I'm Done...")
            res.json({message: "Error", error: err})
        }
        else{
            console.log(tasks);
            var tasks_array = tasks;
            res.json({message: "Success", data: tasks_array})
        }
      })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})