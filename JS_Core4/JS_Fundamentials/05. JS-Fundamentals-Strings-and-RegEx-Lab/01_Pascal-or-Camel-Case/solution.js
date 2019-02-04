function solve() {
  let str1 =  document.getElementById('str1').value;
  let str2 =  document.getElementById('str2').value;
  let result = str1.split(" ").map(x => x.toLowerCase()).map(s => s.charAt(0).toUpperCase() + s.substring(1)).join("");
  if (str2 == "Camel Case" || str2 == "Pascal Case" ) {
    if (str2 == "Camel Case") {
      result = result.charAt(0).toLowerCase() + result.substring(1)
    }
  } else {
    result = "Error!"
  }
  document.getElementById('result').innerHTML = result;
}