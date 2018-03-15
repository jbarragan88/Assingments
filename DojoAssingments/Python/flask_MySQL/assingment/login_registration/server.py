from flask import Flask, render_template, redirect, session, flask, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'nothing')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registration', methods=['POST'])
def registering():
    datac = {
            'email': request
            }
    return redirect('/')

@app.route('/login', methods=['POST'])
def registering():

    return redirect('/')

app.run(debug=True)