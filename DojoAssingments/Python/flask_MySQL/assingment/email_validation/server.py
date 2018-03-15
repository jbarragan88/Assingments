from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'emails')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validation():
    data = {
            'email': request.form['email']
            }
    query = "SELECT email FROM users WHERE email LIKE :email"
    print mysql.query_db(query,data)
    if mysql.query_db(query,data) == []:
        query1 = "INSERT INTO users (email) VALUES (:email)"
        mysql.query_db(query1,data)
        return redirect('/yes')
    else:
        return redirect('/no')

@app.route('/yes')
def yess():
    query = "SELECT * FROM users"
    emails = mysql.query_db(query)
    return render_template('success.html', all_emails=emails)

@app.route('/no')
def noo():
    return render_template('invalid.html')

@app.route('/delete/<email_id>', methods=['POST'])
def deletion(email_id):
    query = "DELETE FROM users WHERE id = :id"
    data = {'id': email_id}
    mysql.query_db(query,data)
    return redirect('/')
app.run(debug=True)
