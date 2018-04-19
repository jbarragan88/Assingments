// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;
// Require path
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/author');
var AuthorSchema = new mongoose.Schema({
    Name: {type: String, required: [true, "Missing Name"], minlength: [3, "Name Must Be longer than 3 Characters"], maxlength: [30, "Name Must Be Shorter Than 30 Characters"]}
}, {timestamps: true } )
mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author') 
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
app.use(express.static( __dirname + '/authorApp/dist' ));
app.use(bodyParser.urlencoded({extended: true}));
//*
//*
//
//*
//*
// Routes
// Root Request
app.post('/api/add', function(req, res){
    console.log("HEHRHE", req.body.name);
    var author = new Author({Name: req.body.name})
    author.save(function(err){
        if(err){
            res.json({data: err})
        }
        else{
            res.json({data: "made it"})
        }
    })
    console.log("Server Add Author", author);
    //res.json({data: "received"})
});

app.all("*", (req,res,next) => {
    console.log("to the back you go")
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})