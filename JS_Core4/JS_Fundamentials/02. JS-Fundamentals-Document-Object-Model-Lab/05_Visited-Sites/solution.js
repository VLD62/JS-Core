function solve() {
  document.getElementById("exercise").addEventListener('click', function (event) {
    if (event.target.tagName == "A") {
      let targetArray = event.target.parentElement.childNodes[3].innerHTML.split(" ")
      targetArray[1] = (Number(targetArray[1]) + 1).toString();
      event.target.parentElement.childNodes[3].innerHTML = targetArray.join(" ");
    }
  })
}