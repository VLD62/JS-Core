function solve() {
  function pAppneder(text) {
    let p = document.createElement('p');
    p.textContent = text;
    (document.getElementById('output')).appendChild(p);
  }
  let sentences = document.getElementById('input').textContent.match(/[^\.!\?]+[\.!\?]+/g);
 
  if (sentences.length <= 3) {
    pAppneder(sentences.join(" "));
  } else {
    let sentence = sentences[0];
    let counter = 1;
    for (let i = 1; i <= sentences.length; i++) {
      sentence += " " + sentences[i];
      counter++;
      if (counter == 3) {
          pAppneder(sentence);
          sentence = "";
          counter = 0;
      }
      if (((sentences.length + 1) - i) == 2) {
         pAppneder(sentences.slice(i,sentences.length).join(" "));
         break;
      }
    }
  }
}