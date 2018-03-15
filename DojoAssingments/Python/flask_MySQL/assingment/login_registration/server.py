from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector
import md5
import os, binascii # include this at the top of your file

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
    salt =  binascii.b2a_hex(os.urandom(15))
    hashed_pw = md5.new(password + salt).hexdigest()
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
        x = (x.decode('unicode_escape').encode('ascii','ignore'))
        if x == "1" or x == "2" or x == "3" or x == "4" or x == "5" or x == "6" or x == "7" or x == "8" or x == "9" or x == "0": #each letter or number inside first name is a str so we check numbers as strings
            print "error5"
            error.append(flash('First Name Cannot Have Numbers'))
    for y in last_name:
        y = (x.decode('unicode_escape').encode('ascii','ignore'))
        if y == "1" or x == "2" or x == "3" or x == "4" or x == "5" or x == "6" or x == "7" or x == "8" or x == "9" or x == "0": #each letter or number inside last name is a str so we check numbers as strings
            print "error5"
            error.append(flash('Last Name Cannot Have Numbers'))

    data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'username': request.form['username'],
            'password': request.form['password'],
            'hashed_pw': hashed_pw,
            'salt': salt
            }
    #sending all errors to html template
    if error: 
        print "rendering"
        return render_template('index.html/', error= error)
    else:
        query1 = "INSERT INTO users (first_name, last_name, username, email, password, salt, created_at) VALUES (:first_name, :last_name, :username, :email, :hashed_pw, :salt, NOW())"
        mysql.query_db(query1,data)
        queryu = "SELECT * FROM users WHERE username LIKE :username"
        session['user'] = mysql.query_db(queryu,data)
        return redirect('/success')

@app.route('/success')
def loggedin():
    return render_template('loggedin.html', name=session['user'][0][u'username'], first_name=session['user'][0][u'first_name'])

@app.route('/login', methods=['POST'])
def logging_in():
    data = {
            'password': request.form['password'],
            'username': request.form['username']
            }
    password = request.form['password']
    querylp = "SELECT password FROM users WHERE username LIKE :username"
    querylu = "SELECT username FROM users WHERE username LIKE :username"
    query_data = {'username': request.form['username']}
    user_query = "SELECT * FROM users WHERE users.username = :username LIMIT 1"
    user = mysql.query_db(user_query, query_data)
    #checking for existance of the input username
    if mysql.query_db(querylu,data) != []:
        print "gucci"
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
         #if username exist compare the input password with the usernames password in the database
        if mysql.query_db(querylp,data)[0][u'password'] == encrypted_password:
            queryu = "SELECT * FROM users WHERE username LIKE :username"
            session['user'] = mysql.query_db(queryu,data)
            print session['user'][0][u'first_name']
            return redirect('/success')
    return redirect('/')

@app.route('/logout')
def loggingoff():
    session['user'] = []
    return redirect('/')
app.run(debug=True)