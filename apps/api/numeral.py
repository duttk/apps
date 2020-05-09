from flask import Flask, Response, jsonify, make_response, request
from flask import json
from fastai.vision import load_learner, open_image
from werkzeug.datastructures import Headers
app = Flask(__name__)

MODEL = './'

@app.route('/', defaults={'path': ''})
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

if __name__ == '__main__':
    app.run(host='0.0.0.0')
