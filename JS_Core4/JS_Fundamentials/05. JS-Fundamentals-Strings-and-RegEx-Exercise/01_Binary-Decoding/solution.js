function solve() {
  let sum = (document.getElementById('str').value.split("").map(x => +x).reduce((sum, current) => sum + current, 0) + "").split("").map(x => +x).reduce((sum, current) => sum + current, 0) + "";
  while (sum.length > 1) {
    sum = sum.split("").map(x => +x).reduce((sum, current) => sum + current, 0) + "";
  }
  let finalArr = [];
  function arraySplitter(array, chunk, array2) {
    for (let i = 0; i < array.length; i += chunk) {
      array2.push(array.slice(i, i + chunk).join(""));
    }
  }
  arraySplitter(document.getElementById('str').value.substr(+sum).slice(0, +sum * (-1)).split(""), 8, finalArr);
  for (element of finalArr.map(x => parseInt(x, 2))) {
    if (/\b[a-zA-Z\s]+\b|\s/.test(String.fromCharCode(element))) {
      document.getElementById('result').textContent += String.fromCharCode(element);
    }
  }
}