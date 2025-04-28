from flask import request, jsonify
from app import db
from app.models import User, Note

# Validation functions
def validate_user_data(data):
    if not data.get('username'):
        return "Username is required"
    if not data.get('email'):
        return "Email is required"
    return None

def validate_note_data(data):
    if not data.get('user_id'):
        return "User ID is required"
    if not data.get('title'):
        return "Title is required"
    if not data.get('description'):
        return "Description is required"
    return None

def init_routes(app):
    # Root endpoint
    @app.route('/')
    def hello():
        return jsonify(message="Hello, World!")

    # 1. User-related endpoints

    # Add a new user
    @app.route('/add_user', methods=['POST'])
    def add_user():
        data = request.json
        error = validate_user_data(data)
        if error:
            return jsonify({"error": error}), 400

        username = data['username']
        email = data['email']

        new_user = User(username=username, email=email)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User added successfully"}), 201

    # Get user by ID
    @app.route('/get_user', methods=['GET'])
    def get_user():
        user_id = request.args.get('id')
        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        return jsonify({
            "id": user.id,
            "username": user.username,
            "email": user.email
        })

    # Delete user by ID
    @app.route('/delete_user', methods=['DELETE'])
    def delete_user():
        user_id = request.args.get('id')
        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        try:
            user_id = int(user_id)
        except ValueError:
            return jsonify({"error": "Invalid User ID"}), 400

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        db.session.delete(user)
        db.session.commit()

        return jsonify({"message": "User deleted successfully"})

    # 2. Note-related endpoints

    # Add a new note
    @app.route('/add_note', methods=['POST'])
    def add_note():
        data = request.json
        error = validate_note_data(data)
        if error:
            return jsonify({"error": error}), 400

        user_id = data['user_id']
        title = data['title']
        description = data['description']
        color = data.get('color', 'default')  # Default color
        category = data.get('category', 'general')  # Default category

        new_note = Note(user_id=user_id, title=title, description=description, color=color, category=category)
        db.session.add(new_note)
        db.session.commit()

        return jsonify({"message": "Note added successfully"}), 201

    # Get note by ID
    @app.route('/get_note', methods=['GET'])
    def get_note():
        note_id = request.args.get('note_id')
        if not note_id:
            return jsonify({"error": "Note ID is required"}), 400

        note = Note.query.get(note_id)
        if not note:
            return jsonify({"error": "Note not found"}), 404

        return jsonify({
            "id": note.note_id,
            "user_id": note.user_id,
            "title": note.title,
            "description": note.description,
            "color": note.color,
            "category": note.category,
            "init_date": note.init_date
        })

    # Delete note by ID
    @app.route('/delete_note', methods=['DELETE'])
    def delete_note():
        note_id = request.args.get('note_id')
        if not note_id:
            return jsonify({"error": "Note ID is required"}), 400

        try:
            note_id = int(note_id)
        except ValueError:
            return jsonify({"error": "Invalid Note ID"}), 400

        note = Note.query.get(note_id)
        if not note:
            return jsonify({"error": "Note not found"}), 404

        db.session.delete(note)
        db.session.commit()

        return jsonify({"message": "Note deleted successfully"})

    # Update note by ID
    @app.route('/update_note', methods=['PUT'])
    def update_note():
        note_id = request.args.get('note_id')
        if not note_id:
            return jsonify({"error": "Note ID is required"}), 400

        note = Note.query.get(note_id)
        if not note:
            return jsonify({"error": "Note not found"}), 404

        data = request.json
        if 'title' in data:
            note.title = data['title']
        if 'description' in data:
            note.description = data['description']
        if 'color' in data:
            note.color = data['color']
        if 'category' in data:
            note.category = data['category']

        db.session.commit()
        return jsonify({"message": "Note updated successfully"})

    # Get all notes for a user
    @app.route('/get_user_notes', methods=['GET'])
    def get_user_notes():
        user_id = request.args.get('user_id')
        category = request.args.get('category')  # Optional category filter

        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        if category:
            notes = Note.query.filter_by(user_id=user_id, category=category).all()
        else:
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