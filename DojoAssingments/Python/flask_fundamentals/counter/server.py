from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = "secreto"

@app.route('/')

def home():
    session['counter'] += 1
    print session
    return render_template('index.html')

@app.route('/twice')

def two():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset')
def one():
    session['counter'] = -1
    return redirect('/')
app.run(debug=True)