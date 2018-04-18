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
app.get('/api/algorithm/:num', function(req,res) {
    console.log("Number in server file:",req.params.num);
    var limit = req.params.num;
    var randomNum = Math.floor(Math.random()*limit);
    console.log("The Random Number:", randomNum);
    //var list = ["How Many?", "Count?"];
    //var answer = [8, 63];
    //var place = 0;
    //if(place < list.length){
      //place = 0;
    //}
    //var question = {
     // ask: list[place],
      //correct: answer[place]
    //}
   // place +=1

    res.json({data: randomNum})
});

app.get('/api/number/:coins', function(req,res){
    var coin = req.params.coins;
    res.json({data: coin})
});

app.post('/api/history/', function(req,res){
    var history = req.body;
    console.log("History:", req.body);
    res.json({data: history})
});
app.post('/api/one/:id', function(req,res){
    var history = req.body;
    var id = req.params.id
    console.log("Server: history:", history, "id:", id)
    for(var i = 0; i < history.length; i++){
        if(id == history[i].Id){
            console.log("Server js Ledger:", history[i].Id)
            res.json({data: history[i]})
        }
    }
});

app.get('/api/buy/:bought', function(req,res){
    console.log("Server js User bought:", req.params.bought);
    var bought = req.params.bought;
    res.json({data: bought})
});

app.all("*", (req,res,next) => {
    console.log("to the back you go")
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})