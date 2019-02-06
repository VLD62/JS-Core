function solve() {
  let indicator = document.getElementById('str').value;
  let txt = document.getElementById('text').value;
  let regexMessage = new RegExp("(?<=" + indicator + ")(.*?)(?=" + indicator + ")", "g");
  let regexNorth = new RegExp(/(north)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/, "gi");
  let regexEast = new RegExp(/(east)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/, "gi");

  function pAppender(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    document.getElementById('result').appendChild(p);
  }
  let north = regexNorth.exec(txt);
  let east = regexEast.exec(txt);


  var matches = [];
  var match = regexNorth.exec(txt);
  while (match != null) {
    matches.push(match[1]);
    match = regexNorth.exec(txt);
  }
  console.log(matches);

  pAppender(north[2] + "." + north[3] + " " + north[1].charAt(0).toUpperCase());
  pAppender(east[2] + "." + east[3] + " " + east[1].charAt(0).toUpperCase());
  pAppender("Message: " + regexMessage.exec(txt)[0]);

}