from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'emails')

@app.route('/')
def index():
    return render_template('index.html')

app.run(debug=True)