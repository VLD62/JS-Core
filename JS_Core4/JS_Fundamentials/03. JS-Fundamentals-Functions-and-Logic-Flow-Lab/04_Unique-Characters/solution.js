function solve() {
  let string = document.getElementById("string").value;
  let newString = "";
  function matchCounter (char, string) {
    let re = new RegExp(char,"g");
    let matches = string.match(re);
    if (matches !== null) {
      return matches.length;
    } else {
      return 0;
    }
  }
  for (let i = 0; i <= string.length; i++) {
   if ((matchCounter(string.charAt(i), string) > 0 && matchCounter(string.charAt(i), newString) == 0)
    || string[i] == " ") {
      newString += string.charAt(i);
    }
  }
  document.getElementById('result').textContent = newString;
}