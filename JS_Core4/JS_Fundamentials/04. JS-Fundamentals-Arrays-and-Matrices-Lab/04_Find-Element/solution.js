function solve() {
  let num =  +document.getElementById('num').value;
  let arr = JSON.parse(document.getElementById('arr').value);
  let result = "";
  let occurence = 0;
  for (let index = 0; index < arr.length; index++) {
    occurence = arr[index].indexOf(num);
    if (occurence >= 0) {
      result += "true -> " + occurence + ",";
    } else {
      result += "false -> " + occurence + ","
    }
    
  }
  document.getElementById('result').textContent = result.slice(0, -1);
}

//"true ->; 6,true -> 3,false -> -1,false -> -1";