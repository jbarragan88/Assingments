from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')

def home():
     return render_template('index.html')

@app.route('/users', methods=['POST'])

def create_user():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    print first_name+' '+last_name
    return render_template('process.html', name=first_name)
app.run(debug=True)