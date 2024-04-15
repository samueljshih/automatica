from flask import Flask, jsonify

app = Flask(__name__)

users = ['Sam', 'Dan', 'David']
voicenotes = ['FORTYYY', 'EFFFFF', 'LEZZ GOOOOOO']

# Index Route
@app.route('/')
def index():
    return 'Automatica is life'

# API routes
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/voicenotes', methods=['GET'])
def get_voicenotes():
    return jsonify(voicenotes)

if __name__ == '__main__':
    app.run(debug=True)

