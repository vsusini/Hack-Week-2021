# ------------------------------------------------------------
# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License.
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import math
import sys
import matlab.engine

app = flask.Flask(__name__)
CORS(app)

# start running matlab engine process once when the app starts
eng = matlab.engine.start_matlab()

@app.route('/logarithm', methods=['POST'])
def logarithm():
    content = request.json
    # cast string to float
    [anti_log, base] = [float(content['operandOne']), float(content['operandTwo'])]
    # log that we are doing the operation
    print(f"Calculating logarithm({operand_one},{operand_two})", flush=True)
    # get result by calling function from matlab engine
    result = eng.dapr_logarithm(operand_one, operand_two)
    # return result with reasonable sig figs
    return jsonify(math.ceil(result * 100000)/100000)

app.run(port=5001)