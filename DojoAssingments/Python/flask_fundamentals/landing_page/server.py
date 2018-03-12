from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')

def home():
    return render_template('index.html')

@app.route('/ninjas')

def ninja():
    return render_template('ninjas.html')

@app.route('/dojo/new')
def dojo():
    return render_template('dojo.html')

app.run(debug=True)