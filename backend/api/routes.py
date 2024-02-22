"""
This folder is dedicated to managing endpoint (route function) definitions.
For each API endpoint, we gather files that contain the necessary routing and view logic.
This approach enables us to organize files based on API functionality, thereby enhancing code structure and improving maintainability.
このフォルダは、エンドポイント (route関数) の定義を管理する場所です。
APIエンドポイントごとに適切なルーティングやビューロジックを含むファイルを集めています。
これにより、APIの機能ごとにファイルを分割し、コードの構造を整理し、保守性を向上させます。
"""

from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/', methods=['GET'])
def hello():
    return jsonify(message='Hello, World!')