function solve() {
  let arr = document.getElementById('arr').value.slice(1, -1).split(",");
  let newarr = arr.map(x => x.replace(/[^0-9]/g, ''));
  let result = "";
  for (let index = 0; index < newarr.length; index++) {
    if (index % 2 == 0) {
      result += newarr[index] + " x ";
    }
  }
  result = result.slice(0, -3); 
  document.getElementById('result').textContent = result;
}