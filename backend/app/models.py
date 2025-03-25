from app import db
from datetime import datetime
from sqlalchemy.orm import relationship


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Unikalny identyfikator
    username = db.Column(db.String(80), unique=True, nullable=False)  # Nazwa użytkownika
    email = db.Column(db.String(120), unique=True, nullable=False)  # Email
    notes = relationship('Notes', backref='user', lazy=True)

    def __repr__(self):
        return f"<User {self.username}>"

class Notes(db.Model):
    note_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(40), nullable=False)  
    description = db.Column(db.String(2000), nullable=False)
    init_date = db.Column(db.DateTime, default=datetime.utcnow)
    color = db.Column(db.String(80), nullable=False)  
    category = db.Column(db.String(80))

    def __repr__(self):
        return f"<Note {self.title} by User {self.user_id}>"