from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask server!"

@app.route('/data', methods=['GET'])
def get_data():
    data = {"message": "This is a simple Flask server"}
    return jsonify(data)

@app.route('/echo', methods=['POST'])
def echo():
    user_data = request.get_json()
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True)
