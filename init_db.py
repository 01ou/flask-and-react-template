"""
This script initializes the database.
You can execute it using the following command.
データベース初期化用のファイルです。
以下のコマンドで実行できます。

python init_db.py

"""


from backend.models.models import db
from backend.__init__ import create_app

def initialize_database():
    # Flaskアプリケーションを作成
    app = create_app()
    
    # Flaskアプリケーションコンテキストを確立
    with app.app_context():
        # データベースの初期化
        db.create_all()

if __name__ == "__main__":
    initialize_database()
