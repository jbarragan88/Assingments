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
mongoose.connect('mongodb://localhost/message');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    created_at: { type: Date, default: Date.now },
    comments: [ {type: Schema.Types.ObjectId, ref: 'Comment'} ] 
} , { timestamps: true })
// What would we need to add to make the below snippet work properly? Read your console!
var CommentSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true},
    text: { type: String, required: true },
   }, {timestamps: true });
mongoose.model('Message', MessageSchema); 
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message') 
var Comment = mongoose.model('Comment') 
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes

app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var message = new Message({name: req.body.name, message: req.body.message});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    message.save(function(err) {
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
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the dogs from the database and include them in the view page we will be rendering.
    Message.find({}, function(err, messages) { 
        if(err){
            console.log("Wasn't able to retrive shit from the database. I'm Done...")
            res.redirect('/')
        }
        else{
            console.log(messages);
            var message_array = messages;
            Comment.find({})
            .populate('comments')
            .exec(function(err, comment) {
                console.log("results from comments:", comment);
                res.render('index', {comment: comment, messages: message_array});
            });
        }
      })
})
app.post('/comment/:id', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Message.find({_id: req.params.id}, function(err, message) {
        var id = req.params.id;
        // data from form on the front end
        var comment = new Comment(req.body)
        //  set the reference like this:
        comment._post = message._id;
        comment.name = req.body.name;
        comment.text = req.body.comment;
        comment.save(function(err){
            console.log("message!!!:", message);
            console.log("FIRST COMMENT:", comment);
            message[0].comments.push(comment);
            message[0].save(function (err){
                if(err){
                    console.log("Couldn't add comment" )
                }
                else{
                    console.log("comment!!!:", comment, "end!!!!!!!")
                    res.redirect('/')
                }
            })
        })
        
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