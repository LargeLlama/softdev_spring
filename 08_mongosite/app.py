from flask import Flask, render_template
import os, random

app = Flask(__name__)

app.secret_key = os.urandom(32)

@app.route('/')
def root():
    return render_template('home.html')

@app.route('/auth')
def auth():
    #code to validate stuff


if __name__ == '__main__':
    app.debug=True
    app.run(host='0.0.0.0')
