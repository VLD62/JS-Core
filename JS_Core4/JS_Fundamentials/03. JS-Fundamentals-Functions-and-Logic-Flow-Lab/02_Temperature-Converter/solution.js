function solve() {
  let degrees  = document.getElementById("num1").value;
  let type = document.getElementById("type").value.toLowerCase();
  let result = "";
  if (type == "fahrenheit") {
    result = Math.round((degrees - 32)/1.8);
  } else if (type == "celsius") {
    result = Math.round((degrees * 1.8) + 32);
  } 
  else  {
    result = "Error!";
  }
  document.getElementById('result').textContent = result;
}