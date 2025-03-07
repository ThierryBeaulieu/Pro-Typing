from flask import (Flask, redirect, render_template, request, url_for)
import json
from waitress import serve

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world"

@app.route('/hello', methods=['POST'])
def hello():
    return "hello world"


if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=8080)