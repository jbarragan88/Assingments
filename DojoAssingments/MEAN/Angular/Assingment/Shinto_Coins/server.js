// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

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
app.use(express.static( __dirname + '/coinApp/dist' ));
//*
//*
//
//*
//*
// Routes
// Root Request
app.get('/api/algorithm', function(req,res) {
    var list = ["How Many?", "Count?"];
    var answer = [8, 63];
    var place = 0;
    if(place < list.length){
      place = 0;
    }
    var question = {
      ask: list[place],
      correct: answer[place]
    }
    place +=1
    res.json({data: question})
});

app.all("*", (req,res,next) => {
    console.log("to the back you go")
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})