"""
Gather commonly used functions for your project in this folder. 
You can reuse these functions whenever you need to implement similar functionality. 
This practice reduces repetition in your code and enhances its maintainability.
このフォルダには、プロジェクト全体でよく使われる関数をまとめます。
同じ機能を再度実装する必要がある場合に、これらの関数を再利用できます。
これにより、コードの重複が減り、保守性が向上します。
"""

def get_column_data(table, column):
    # 指定された列のデータを取得する
    column_data = table.query.with_entities(column).all()
    # データをリストに格納する
    data_list = [getattr(data, column.key) for data in column_data]
    return data_list