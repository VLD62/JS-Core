function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  function divAppneder(text) {
    let div = document.createElement('div');
    div.textContent = text;
    (document.getElementById('result')).appendChild(div);
  }
  divAppneder(arr.map(x => +x).sort((x, y) => x - y).join(", "));
  divAppneder(arr.sort().join(", "))
}