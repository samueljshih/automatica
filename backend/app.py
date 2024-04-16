from flask import Flask, jsonify
from big_query import bq_client, query_bigquery

app = Flask(__name__)

voicenotes = ['FORTYYY', 'EFFFFF', 'LEZZ GOOOOOO']

# Index Route
@app.route('/')
def index():
    sql_query = "SELECT * FROM `massive-clone-420421.Automatica.users` LIMIT 1000"
    rows =  query_bigquery(sql_query)
    row_data = [dict(row.items()) for row in rows]
    return jsonify(row_data)


# API routes
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/voicenotes', methods=['GET'])
def get_voicenotes():
    return jsonify(voicenotes)

if __name__ == '__main__':
    app.run(debug=True)

