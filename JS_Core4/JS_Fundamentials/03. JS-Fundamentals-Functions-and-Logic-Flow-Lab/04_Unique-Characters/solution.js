function solve() {
  let string = document.getElementById("string").value;
  let newString = string.charAt(0);
  
  function matchCounter (char, string) {

    let re = new RegExp(char,"g");
    let matches = string.match(re);
    console.log(matches);
    return matches.length;
  }
  for (let i = 0; i <= string.length; i++) {
    if (matchCounter(string.charAt(i), newString) == 1 || string[i] == " ") {
      newString += string.charAt(i);
    } 
  }
  document.getElementById('result').textContent = newString;
}