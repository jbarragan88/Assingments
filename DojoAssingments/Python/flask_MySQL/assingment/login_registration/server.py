from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'nothing')
app.secret_key = 'somesecretkey'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registration', methods=['POST'])
def registering():
    datac = {
            'email': request.form['email'],
            'username': request.form['username']
            }
    username = request.form['username']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    password = request.form['password']
    confirm_password = request.form['cpassword']
    queryce = "SELECT email FROM users WHERE email LIKE :email"
    querycu = "SELECT username FROM users WHERE username LIKE :username"
    error = []
    #checking number of characters
    if len(username) < 2:
        print "error3"
        error.append(flash("Username Must Be Atleast 2 Characters Long"))
    if len(first_name) < 2:
        print "error3"
        error.append(flash("First Name Must Be Atleast 2 Characters Long"))
    if len(last_name) < 2:
        print "error3"
        error.append(flash("Last Name Must Be Atleast 2 Characters Long"))
    if len(password) < 9:
        print "error3"
        error.append(flash("Password Must Be Atleast 8 Characters Long"))
    #comparing passwords
    if password != confirm_password:
        print "error4"
        error.append(flash("Passwords Don't Match"))
    #checking if existing in database
    if mysql.query_db(queryce,datac) != []:
        print "error1"
        error.append(flash('Email Already In Use'))
    if mysql.query_db(querycu,datac) != []:
        print "error2"
        error.append(flash('Username Already In Use')) 
    #looping through each letter to check for unwanted numbers
    for x in first_name:
        print x
        x = (x.decode('unicode_escape').encode('ascii','ignore'))
        print (x.decode('unicode_escape').encode('ascii','ignore'))
        print type(x)
        if type(x) == "int":
            print "error5"
            error.append(flash('First Name Cannot Have Numbers'))
    #sending all errors to html template
    if error: 
        print "rendering"
        return render_template('index.html/', error= error)

@app.route('/login', methods=['POST'])
def logging_in():
    return redirect('/')

app.run(debug=True)