function solve() {
  let str =  document.getElementById('str').value.split(" ");
  let numArray = [];
  let wordArray = [];
  function pAppneder(text) {
    let p = document.createElement('p');
    p.textContent = text;
    (document.getElementById('result')).appendChild(p);
  }
  function isNumber(str) {
    let pattern = /^\d+$/;
    return pattern.test(str);  
  }

  //str = str.map(ascii = a => a.charCodeAt(0));
  let result = "";

  str.forEach((element) => {
    if(isNumber(element)) {
      numArray.push(element);
    } else {
      wordArray.push(element);
    }
  }); 

  pAppneder(String.fromCharCode(numArray.join(",")));
  pAppneder(numArray.map(char => char.charCodeAt(0)).reduce((current, previous) => previous + current));

}