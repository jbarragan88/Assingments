from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def Hello():
    return render_template('indec.html')
app.run(debug=True)