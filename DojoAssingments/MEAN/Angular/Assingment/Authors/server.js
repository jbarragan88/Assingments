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
    console.log("Server Add Author", req.body.name);
    var author = new Author({Name: req.body.name})
    author.save(function(err){
        if(err){
            res.json({messagee: "Error", data: err})
        }
        else{
            res.json({messagee: "Success", data: "made it"})
        }
    })
    console.log("Server Added Author", author);
});

app.post('/api/edit/:id', function(req, res){
    if(req.body.name.length < 4){
        res.json({messagee: "Error"})
    }
    else{
        console.log("Server the param id:", req.params.id)
        Author.update({_id: req.params.id}, {$set: {Name: req.body.name}}, function(err, author){
            if(err){
                console.log("ERROROROROROR")
                res.json({messagee: "Error", data: err})
            }
            else{
                console.log("SUCESEESEECESCESSSS")
                res.json({messagee: "Success", data: "made it"})
            }
        })
    }
});

app.get('/api/find/:id', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){ 
        if(err){
            console.log("Server Finding Author error:", err)
        }
        else{
            res.json({data: author});
        }
    })

});

app.get('/api/findAll', function(req, res){

    Author.find({}, function(err, authors) {
        if(err){
            console.log("The server was not able to find shit..", err);
            res.json({message: "Error", error: err});
        }
        else{
            console.log("Successful On Finding Authors", authors);
            res.json({message: "Success", data: authors});
        }
    })
});

app.get('/api/delete/:id', function(req, res){
    Author.find({_id: req.params.id}, function(err, author){
        if(err){
            console.log("Server Didn't Find author to delete", err);
            res.jason({message: "Error"});
        }
        else{
            console.log("Server Found author to delete", author);
            Author.remove({_id: req.params.id}, function(err){
                res.json({message: "Success"});
            })
        }
    })
});

app.all("*", (req,res,next) => {
    console.log("to the back you go")
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})