from flask import Flask, jsonify, request
from big_query import bq_client, query_bigquery
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

voicenotes = ['FORTYYY', 'EFFFFF', 'LEZZ GOOOOOO']

# Index Route
@app.route('/')
def index():
    print('WORKING?')
    sql_query = "SELECT * FROM `massive-clone-420421.Automatica.voicenotes` LIMIT 1000"
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


@app.route('/api/voicenotes', methods=['POST'])
def save_voicenotes():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    return jsonify({'message': 'File uploaded successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)

