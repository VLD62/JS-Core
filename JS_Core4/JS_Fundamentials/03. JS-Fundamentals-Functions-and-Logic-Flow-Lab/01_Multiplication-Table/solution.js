function solve() {
  let startingNumber  = +document.getElementById("num1").value;
  let multiplier = +document.getElementById("num2").value;
  if (startingNumber > multiplier) {
    document.getElementById('result').textContent = "Try with other numbers.";
  } else {
    for (let i = startingNumber; i <= multiplier; i++) {
      let p = document.createElement('p');
      p.textContent = i + " * " + multiplier + " = " + (i * multiplier);
      document.getElementById('result').appendChild(p);
    }
  }
}