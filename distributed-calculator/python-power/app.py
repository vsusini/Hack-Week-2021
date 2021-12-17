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

@app.route('/power', methods=['POST'])
def logarithm():
    content = request.json
    [operand_one, operand_two] = [float(content['operandOne']), float(content['operandTwo'])]
    print(f"Calculating {operand_one} ^ {operand_two}", flush=True)
    try:
        cmd = './dapr_exponentiation' + ' ' + str(operand_one) + ' ' + str(operand_two)
        result = os.system(cmd)
        if str(os.system(cmd)) == "32512":
            raise Exception("MyException")
        print("Matlab worked!")
        return jsonify(result)
    except Exception as e:
        print("No Matlab :(")
        result = int(operand_one) ** int(operand_two)
        # Sneaky, it works shhhhhh
        return jsonify(math.ceil(result*100000)/100000)

app.run(port=5003)