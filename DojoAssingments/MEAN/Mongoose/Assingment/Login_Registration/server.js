// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
require('mongoose-type-email');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt');
var path = require('path');

//*
//*
//
//*
//*
// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');
var UserSchema = new mongoose.Schema({
    email: {type: mongoose.SchemaTypes.Email, unique: true, required: [true, "Missing Email"]},
    first_name: {type: String, required: [true, "Missing First Name"], minlength: [3, "First Name Must Be longer than 3 Characters"], maxlength: [20, "First Name Must Be Shorter Than 20 Characters"]},
    last_name: {type: String, required: [true, "Missing Last Name"], minlength: [3, "Last Name Must Be longer than 3 Characters"], maxlength: [20, "Last Name Must Be Shorter Than 20 Characters"]},
    birthday: {type: Date, required: [true, "Missing Birthdate"]},
    password: {type: String, required: [true, "Missing Password"]}
}, {timestamps: true });
mongoose.model('User', UserSchema); 
var User = mongoose.model('User') 
UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.validPassword = function(password1, password2){
    return bcrypt.compareSync(password1, password2)
}
//*
//*
//
//*
//*
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//*
//*
//
//*
//*
// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
})
//Registration route
app.post('/register', function(req, res) {
    console.log("POST DATA", req.body);
    var user1 = new User();
    user1.email = req.body.email;
    user1.first_name= req.body.first_name;
    user1.last_name= req.body.last_name;
    user1.birthday= req.body.birthday;
    user1.password= UserSchema.methods.hashPassword(req.body.password);
    user1.save(function(err) {
      // if there is an error console.log that something went wrong!
      console.log("Here Here", err);
      //compare password and the confirm password, if they are not the same run code inside if 
      if(req.body.password !== req.body.password_confirm){
          //if there was no errors when saving the user, just send the error messsage that passwords don't match
        if(err == null ) {
            var no = [{message: "Passwords Don't Match"}]
            res.render('index', {errors: no});
        }
        //if there was errors when saving user, add this error message with the  other errors
        else{
            err.errors["password"]= {message: "Passwords Don't Match"};
        }
      }
      //Check for errors when user was saved
      if(err) {
          //Check to see if the email the user input was unique, if it was not send error email exists
          if(err.name == 'BulkWriteError'){
              console.log("Bulk error")
            var no = [{message: "Email Already Exists"}]
            res.render('index', {errors: no});
          }
          else{
            console.log('something went wrong', err);
            res.render('index', {errors: user.errors});
          }
        
      } 
      //if no errors, successfuly log in the user  by saving there id in session and redirecting them to the home page
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        //var success = [{message: "Success"}]
        //res.render('index', {errors: success});
        User.findOne({email: req.body.email}, function(err, user){
            console.log(user)
            req.session.user = user._id
            res.redirect('/home')
        })
      }
    })
  })
  // User Log In
  app.post('/login', function(req, res) {
    console.log("POST DATA", req.body);
    //find for a matching email in database and user's input email
    User.findOne({email: req.body.email}, function(err, user){
        //if there was error when looking for the email tell user they've input a wrong email
        if(err){
            var no = [{message: "Incorrect Email"}]
            res.render('index', {errors: no})
        }
        //if the email was found
        else{
            //check if the input password and database password are the same
            if(UserSchema.methods.validPassword(req.body.password, user.password)){
                //if they are succesfully log them in
                req.session.user = user._id
                res.redirect('/home')
            }
            else{
                //if passwords weren't the same tell user incorrect password
                var no = [{message: "Incorrect Password"}]
                res.render('index', {errors: no})
            }
        }
    })
  })
// Route for when user is logged in 
app.get('/home', function(req, res) {
    User.findOne({_id: req.session.user}, function(err, user){
        console.log("You Are the user", user)
        res.render('home', {user: user});
    })
})
// Route for Logging Out User 
app.get('/logout', function(req, res) {
    req.session.user = "";
    res.redirect('/')
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})