from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import routes as api_routes
from middlewares import middleware_functions
from models import db_models
from utils import utility_functions

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'  # SQLite データベースの場合
db = SQLAlchemy(app)

# API routes
app.register_blueprint(api_routes.api)

# Middlewares
# Register middleware functions with app

# Database setup
# Connect to database, initialize ORM, etc.

if __name__ == "__main__":
    app.run(debug=True)
