function solve() {
  let arr = document.getElementById('arr').value.slice(1, -1).split(",");
  let newarr = arr.map(x => x.replace(/[^0-9]/g, ''));
  newarr.forEach((element, index) => {
    let p = document.createElement('p');
    p.textContent = `${index} -> ${+element*newarr.length}`;
    (document.getElementById('result')).appendChild(p);
  });
}