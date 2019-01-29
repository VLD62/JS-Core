function solve() {
  let firstNumber = +document.getElementById("firstNumber").value;
  let secondNumber = +document.getElementById("secondNumber").value;
  let firstString = document.getElementById("firstString").value;
  let secondString = document.getElementById("secondString").value;
  let thirdString = document.getElementById("thirdString").value;
  function pAppender(text) {
    let p = document.createElement('p');
    p.textContent = text;
    document.getElementById('result').appendChild(p);
  }
  for (let i = firstNumber; i <= secondNumber; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        pAppender(`${i} ${firstString}-${secondString}-${thirdString}`);
      } else if (i % 3 == 0) {
        pAppender(`${i} ${secondString}`);
      } else if (i % 5 == 0) {
        pAppender(`${i} ${thirdString}`);
      } else {
        pAppender(`${i}`);
      }
  }
}