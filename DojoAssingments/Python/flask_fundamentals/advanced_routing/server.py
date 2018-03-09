from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/users/<username>/<id>')        #the url will have a unique username and id 

def show_user_profile(username, id):        #the username and id will be retrived the the url
    print username
    print id
    return render_template('user.html')
app.run(debug=True)