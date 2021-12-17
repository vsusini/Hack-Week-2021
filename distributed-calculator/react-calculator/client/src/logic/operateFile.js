export default async function operateFile(file) {

  console.log(`Calling File service`);

  var obj;

  var reader = new FileReader();
    reader.onload = function(event) {
        console.log('File content:', event.target.result);
        obj = JSON.parse(event.target.result);
        console.log(obj)
    };
    reader.readAsText(file);



  const rawResponse = await fetch(`/calculate/file`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      obj,
    }),
  });
  const response = await rawResponse.json();

  console.log(response.results)

  return response.toString();
}