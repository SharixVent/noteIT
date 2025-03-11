from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Unikalny identyfikator
    username = db.Column(db.String(80), unique=True, nullable=False)  # Nazwa użytkownika
    email = db.Column(db.String(120), unique=True, nullable=False)  # Email

    def __repr__(self):
        return f"<User {self.username}>"
