from flask import Flask, Response, jsonify, make_response
from flask import json
from werkzeug.datastructures import Headers
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/api/hello')
def hello():
    response = Response(
        status=200,
        headers=Headers({
            'Access-Control-Allow-Origin': '*'
        })
    )
    response.data = json.dumps({
        'hello': 'world'
    })
    return response
