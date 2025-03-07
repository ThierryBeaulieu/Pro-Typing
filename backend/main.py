from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Azure Flask API!"})

@app.route('/data', methods=['GET'])
def get_data():
    sample_data = {"id": 1, "name": "Sample Data"}
    return jsonify(sample_data)

@app.route('/data', methods=['POST'])
def post_data():
    data = request.json
    return jsonify({"received": data}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)