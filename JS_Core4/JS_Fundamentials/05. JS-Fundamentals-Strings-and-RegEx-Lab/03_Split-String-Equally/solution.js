function solve() {
  let str =  document.getElementById('str').value;
  let num =  +document.getElementById('num').value; 
  let result = [];
  function stringChecker (str, oldstring) {
    if (str.length < num) {
      return str + oldstring.substring(0, (num - str.length));
    } else {
      return str;
    }
  }
  for (index = 0; index < str.length; index += num) {
    let slice = str.slice(index, index+num);
    result.push(stringChecker(slice,str));
  }
  document.getElementById('result').innerHTML = result.join(" ");
}