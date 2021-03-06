// Import express and path modules.
var express = require( "express");
var path = require( "path");
// Create the express app.
var app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on( "button_clicked", function (data){
        console.log( 'Someone clicked a button!  Reason: '  + data.reason);
        //  EMIT: sends data from the server to the specific client who initiated contact.
        socket.emit( 'server_response', {response:  "Only You See This!"});
        //  BROADCAST: sends data from the server to everyone BUT the client that initiated the contact.
        socket.broadcast.emit( 'my_broadcast_event', {broadcast: "User: " + socket.id + " clicked the button. Button Clicker doesn't see this."});
        //  FULL BROADCAST: sends data to all connected clients.
        io.emit( 'my_full_broadcast_event', {full: "Button Clicked!!! Everyone sees this"});
    }) 

    socket.on( "form", function (data){
        console.log( 'Here is array form name: '  + data.info[0].value);
        var name = data.info[0].value;
        var location = data.info[1].value;
        var language = data.info[2].value;
        var comment = data.info[3].value;
        var ran = Math.floor(Math.random()*1000);
        io.emit( 'form_info', {name: name, location: location, language: language, comment: comment , ran: ran});
    }) 
  })