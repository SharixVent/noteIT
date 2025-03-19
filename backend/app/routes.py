from flask import request, jsonify
from app import db
from app.models import User, Note

def init_routes(app):
    @app.route('/')
    def hello():
        return jsonify(message="Hello, World!")
    
    # 1. Endpoints for adding, getting, editing and deleting users

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
        
    # 2. Endpoints for adding, getting by id and specific user notes, editing and deleting notes
    
    @app.route('/add_note', methods=['POST'])
    def add_note():
        user_id = request.json.get('user_id')
        title = request.json.get('title')
        description = request.json.get('description')
        color = request.json.get('color')
        category = request.json.get('category')

        if not user_id or not title or not description:
            return jsonify({"error": "Missing required fields"}), 400

        new_note = Note(user_id=user_id, title=title, description=description, color=color, category=category)
        db.session.add(new_note)
        db.session.commit()

        return jsonify({"message": "Note added successfully"}), 201

    @app.route('/get_note', methods=['GET'])
    def get_note():
        note_id = request.args.get('id')

        if not note_id:
            return jsonify({"error": "Note ID is required"}), 400

        note = Note.query.get(note_id)

        if not note:
            return jsonify({"error": "Note not found"}), 404

        return jsonify({
            "id": note.id,
            "user_id": note.user_id,
            "title": note.title,
            "description": note.description,
            "color": note.color,
            "category": note.category,
            "init_date": note.init_date
        })
        
    # TODO - update_note, delete_note
        
    @app.route('/get_user_notes', methods=['GET'])
    def get_user_notes():
        user_id = request.args.get('user_id')

        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        user = User.query.get(user_id)

        if not user:
            return jsonify({"error": "User not found"}), 404

        notes = Note.query.filter_by(user_id=user_id).all()

        return jsonify([{
            "id": note.note_id,
            "user_id": note.user_id,
            "title": note.title,
            "description": note.description,
            "color": note.color,
            "category": note.category,
            "init_date": note.init_date
        } for note in notes])