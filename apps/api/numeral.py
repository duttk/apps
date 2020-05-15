import os
from flask import Flask, Response, jsonify, make_response, request
from flask import json, send_from_directory
from fastai.vision import load_learner, open_image
from werkzeug.datastructures import Headers

REACT_BUILD_DIR = os.path.join(
    os.path.abspath(os.path.dirname(__file__)), 'build'
)
app = Flask(__name__, static_url_path=REACT_BUILD_DIR)

MODEL = './'


@app.route('/api/numeral', methods=['POST'])
def numeral():
    img = open_image(request.files['file'])
    learn = load_learner(MODEL)
    pred_class, pred_idx, outputs = learn.predict(img)

    response = Response(
        status=200,
        headers=Headers({
            'Access-Control-Allow-Origin': '*'
        })
    )
    response.data = json.dumps({
        'prediction': learn.data.classes[pred_idx]
    })
    return response

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if not path == '' and os.path.exists(REACT_BUILD_DIR + '/' + path):
        return send_from_directory(REACT_BUILD_DIR, path)
    else:
        return send_from_directory(REACT_BUILD_DIR, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
