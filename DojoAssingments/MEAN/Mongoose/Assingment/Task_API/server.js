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
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/task');
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: "_"},
    completed: {type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})
mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task') 
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
        }
      })
})
//creat new task
app.post('/task', function(req, res) {
    var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
    task.save(function(err){
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
//delete task
//app.get('/remove/:id', function(req, res) {
    //Task.find({_id: req.params.id}, function(err, tasks) { 
        //Task.remove({_id: req.params.id}, function(err){
            //if(err){
                //console.log("Wasn't able to delete shit from the database. I'm Done...")
                //res.redirect('/')
            //}
            //else{
                //console.log('Killing one task at a time')
                //res.redirect('/')
            //}
        //})
      //})
//})
//update/task
app.post('/update/:id', function(req, res) {
    Task.find({_id: req.params.id}, function(err, tasks) { 
        Task.update({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description,completed: req.body.completed}}, function(err, task){
            var id = req.params.id;
            if(err){
                res.redirect('/')
            }
            else{
                console.log(task);
                res.redirect('/'+id)
            }
        });
      })
})

//view task by id
//app.get('/:id', function(req, res) {
    //Task.find({_id: req.params.id}, function(err, tasks) { 
        //if(err){
           // console.log("Wasn't able to retrive shit from the database. I'm Done...")
            //res.json({message: "Error", error: err})
        //}
       // else{
         //   console.log(tasks);
         //   var tasks_array = tasks;
         //   res.json({message: "Success", data: tasks_array})
//}
     // })
//})
//view task by title
app.get('/:title', function(req, res) {
    console.log("testing",req.params.title);
    Task.findOne({title: req.params.title}, function(err, tasks) { 
        if(err){
            console.log("Wrong Title: Wasn't able to retrive shit from the database. I'm Done...")
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