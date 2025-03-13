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

    @app.route('/get_user', methods=['GET'])
    def get_user():
        user_id = request.args.get('id')  # Pobranie ID z parametrów zapytania

        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        user = User.query.get(user_id)  # Pobranie użytkownika z bazy

        if not user:
            return jsonify({"error": "User not found"}), 404

        return jsonify({
            "id": user.id,
            "username": user.username,
            "email": user.email
        })
    
    @app.route('/delete_user', methods=['DELETE'])
    def delete_user():
        user_id = request.args.get('id')

        if not user_id:
            return jsonify({"error": "User ID is required"}), 400
    
        try:
            user_id = int(user_id)  # Konwersja na int
        except ValueError:
            return jsonify({"error": "Invalid User ID"}), 400

        user = User.query.get(user_id)  # Pobranie użytkownika

        if not user:
            return jsonify({"error": "User not found"}), 404

        db.session.delete(user)  # Usunięcie użytkownika
        db.session.commit()  # Zapisanie zmian

        return jsonify({"message": "User deleted successfully"})
    
    #@app.route('/update_user', methods=['PUT'])
    #def update_user():
        #todo

