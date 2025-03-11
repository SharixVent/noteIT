from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)  # Załaduj konfigurację z config.py

    db.init_app(app)  # Inicjalizacja bazy danych

    # Załaduj trasy z routes.py
    from app.routes import init_routes
    init_routes(app)

    # Załaduj modele (chociaż modele mogą być importowane w razie potrzeby)
    from app.models import User

    return app
