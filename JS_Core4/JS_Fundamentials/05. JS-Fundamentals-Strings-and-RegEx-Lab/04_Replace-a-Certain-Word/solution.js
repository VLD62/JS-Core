function solve() {
  let arr =  document.getElementById('arr').value;
  let str =  document.getElementById('str').value; 
  function pAppneder(text) {
    let p = document.createElement('p');
    p.textContent = text;
    (document.getElementById('result')).appendChild(p);
  }
  let word = arr.split(" ")[2];
  word = word.substring(0, word.length-2)
  for (element of JSON.parse(arr)) {
    let  re = new RegExp(word,"gi");
    element = element.replace(re, str);
    pAppneder(element);
  }
}