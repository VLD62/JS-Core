function solve() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let arr = document.getElementById('arr').value.slice(1, -1).split(", ");
  let newArr = arr.map(x => capitalizeFirstLetter(x.slice(1, -1).split("").reverse().join("")));
  document.getElementById('result').textContent = newArr.join(" ");
}