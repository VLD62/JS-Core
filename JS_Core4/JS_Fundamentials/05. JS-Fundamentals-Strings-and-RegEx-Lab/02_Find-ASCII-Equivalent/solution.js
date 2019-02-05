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
  str.forEach((element) => {
    if(isNumber(element)) {
      numArray.push(element);
    } else {
      wordArray.push(element);
    }
  }); 
  let res = "";
  for (element of numArray) {
    res += String.fromCharCode(element)
  }
  for (element of wordArray) {
    let word= "";
    for (var i = 0; i < element.length; i++) {
      word += (element.charCodeAt(i)) +" ";
    }
    pAppneder(word.substring(0, word.length-1));
  }
  pAppneder(res);
}