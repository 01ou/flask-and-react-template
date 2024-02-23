"""
This folder is dedicated to managing endpoint (route function) definitions.
For each API endpoint, we gather files that contain the necessary routing and view logic.
This approach enables us to organize files based on API functionality, thereby enhancing code structure and improving maintainability.
このフォルダは、エンドポイント (route関数) の定義を管理する場所です。
APIエンドポイントごとに適切なルーティングやビューロジックを含むファイルを集めています。
これにより、APIの機能ごとにファイルを分割し、コードの構造を整理し、保守性を向上させます。
"""

from flask import Blueprint, request, jsonify
from backend import db
from backend.models.models import Sample_db_entered
import backend.utils.utils as utils

api = Blueprint('api', __name__)

@api.route('/', methods=['GET'])
def hello():
    return '<h1>Hello, World!</h1>'

@api.route('/data', methods=['GET'])
def data():
    return jsonify(message='Sample data from Flask.')


@api.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        # POSTリクエストの場合
        data = request.json.get('data')
        if data:
            # データがある場合
            new_entry = Sample_db_entered(content=data)
            db.session.add(new_entry)
            db.session.commit()
            all_data = utils.get_column_data(Sample_db_entered, Sample_db_entered.content)
            return jsonify(message=f'Entry added: [{data}] / All data: {all_data}')
        else:
            # データがない場合
            return jsonify(message='Please enter data.'), 400
    else:
        # GETリクエストの場合
        return jsonify(message='Sample data from Flask.')
