from flask import Flask, render_template, redirect, session, request
from random import randint

app = Flask(__name__)
app.secret_key='secreto'

@app.route('/')

def home():
    session['randnumber'] = randint(0,100)
    print session['randnumber']
    return render_template('index.html')

@app.route('/answer', methods=['POST'])

def answering():
    session['guessing'] = request.form['guess']
    guess1 = session['guessing']
    random = session['randnumber']
    print guess1
    print random
    if int(guess1) != int(random):
        if int(guess1) < int(random):
            session['no'] = 'Low'
        else:
            session['no'] = 'High'
        return render_template('wrong.html')
    elif int(guess1) == int(random):
        return render_template('correct.html')

app.run(debug=True)