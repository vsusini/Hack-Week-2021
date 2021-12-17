const operationMap = {
  "+": "add",
  "-": "subtract",
  "x": "multiply",
  "÷": "divide",
  "cos": "cos",
  "sin": "sin",
  "log": "logarithm",
  "x^y": "power",
  "mod" : "modular",
};

export default async function operate(operandOne, operandTwo, operationSymbol) {

  operandOne = operandOne || "0";
  operandTwo = operandTwo || (operationSymbol === "÷" || operationSymbol === 'x' ? "1" : "0"); //If dividing or multiplying, then 1 maintains current value in cases of null

  const operation = operationMap[operationSymbol];
  console.log(`Calling ${operation} service`);

  const rawResponse = await fetch(`/calculate/${operation}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operandOne,
      operandTwo
    }),
  });
  const response = await rawResponse.json();

  return response.toString();
}

export async function operateFile(file) {

  console.log(`Calling File service`);

  var reader = new FileReader();
    reader.onload = function(event) {
        console.log('File content:', event.target.result);
        var text = JSON.parse(event.target.result);
        console.log(text)
    };
    reader.readAsText(file);



  const rawResponse = await fetch(`/calculate/file`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file,
    }),
  });
  const response = await rawResponse.json();

  return response.toString();
}