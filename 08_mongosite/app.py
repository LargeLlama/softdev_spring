from flask import Flask, render_template, request, session
from util import pokemon

import pymongo, json
import os, random

app = Flask(__name__)

app.secret_key = os.urandom(32)

collection = ''

@app.route('/')
def root():
    return render_template('home.html')

@app.route('/auth')
def auth():
    SERVER_ADDR = request.args.get('ip')
    connection = pymongo.MongoClient(SERVER_ADDR)
    db = connection.silicon_wings
    collection = db.pokemon

    with open('data/pokemon.json') as file:
        file_data = json.load(file)

    collection.insert(file_data)
    return render_template('auth.html', ip = SERVER_ADDR)

@app.route('/results')
def results():
    type_0 = request.args.get('type_0')
    type_1 = reuqest.args.get('type_1')
    return render_template('results.html', types = find_types(collection, type_0, type_1))

if __name__ == '__main__':
    app.debug=True
    app.run(host='0.0.0.0')
