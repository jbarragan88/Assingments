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

//Saving the Message 
app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new Message with the name and message input
    var message = new Message({name: req.body.name, message: req.body.message});
    message.save(function(err) {
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
    Message.find({})
        .populate('comments')
        .exec(function(err, message) {
            res.render('index', {messages: message});
        });
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
        message[0].comments.push(comment);
        comment.save(function(err){
            console.log("message!!!:", message);
            console.log("FIRST COMMENT:", comment);
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
      })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})