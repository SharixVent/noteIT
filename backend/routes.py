from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify(message="Welcome to the home page!")


if __name__ == '__main__':
    app.run(debug=True)