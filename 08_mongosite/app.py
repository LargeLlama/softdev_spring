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
