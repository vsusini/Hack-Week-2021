# ------------------------------------------------------------
# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License.
# ------------------------------------------------------------

# Call dapr_logarithm.m

import os

import flask
from flask import request, jsonify
from flask_cors import CORS
import math
import sys

app = flask.Flask(__name__)
CORS(app)

@app.route('/logarithm', methods=['POST'])
def logarithm():
    content = request.json
    [operand_one, operand_two] = [float(content['operandOne']), float(content['operandTwo'])]
    print(f"Calculating logarithm {operand_one} and {operand_two}", flush=True)
    cmd = 'dapr_logarithm' + ' ' + str(operand_one) + ' ' + str(operand_two)

    return jsonify(os.system(cmd))

app.run(port=5002)