function solve() {
  let string = document.getElementById("string").value;
  let character = document.getElementById("character").value;
  let re = new RegExp(character,"g");
  let matches = string.match(re);
  let text = ""
  if (matches.length % 2 == 0) {
     text = `Count of ${character} is even.`;
  } else {
    text = `Count of ${character} is odd.`;
  }
  document.getElementById('result').textContent = text;
}