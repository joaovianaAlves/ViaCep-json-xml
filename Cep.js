var XMLHttpRequest = require('xhr2');
const readline = require('node:readline');
const { Console } = require('node:console');
var oReq = new XMLHttpRequest();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Cep: `, name => {

    console.log("JSON:")

    fetch(`https://viacep.com.br/ws/${name}/json`)    
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

    console.log("XML:")
    oReq.open('GET',`https://viacep.com.br/ws/${name}/xml`, true);
    oReq.onreadystatechange = function() {
      if(oReq.readyState === 4 && oReq.status === 200){
        const response = oReq.responseText;
        console.log(response);
      }
    };
    oReq.send();
    rl.close();

  });


