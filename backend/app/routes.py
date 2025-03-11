from flask import request, jsonify
from app import db
from app.models import User

def init_routes(app):
    @app.route('/')
    def hello():
        return jsonify(message="Hello, World!")

    @app.route('/add_user', methods=['POST'])
    def add_user():
        username = request.json.get('username')
        email = request.json.get('email')

        # Tworzymy nowego użytkownika
        new_user = User(username=username, email=email)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User added successfully"}), 201
