function solve() {
  let indicator = document.getElementById('str').value;
  let txt = document.getElementById('text').value;
  let regexMessage = new RegExp("(?<=" + indicator + ")(.*?)(?=" + indicator + ")", "g");
  let regexNorthEast = new RegExp(/(north|east)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/, "gi");
  let norths = [];
  let easts = [];
  function pAppender(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    document.getElementById('result').appendChild(p);
  }
  let matches = txt.match(regexNorthEast);
  for (element of matches) {
    if (element.toUpperCase().charAt(0) == "N") {
      norths.push(element); 
    } else {
      easts.push(element);
    }
  }
  let north = norths[norths.length - 1].replace(",", ".").replace(/\s*[a-zA-Z]*/g, "");
  let east =  easts[easts.length - 1].replace(",", ".").replace(/\s*[a-zA-Z]*/g, "");
  let northArr = north.split(".");
  let eastArr = east.split(".");
  northArr[0] =  northArr[0].charAt(0) + northArr[0].charAt(1);
  eastArr[0] =  eastArr[0].charAt(0) + eastArr[0].charAt(1);
  pAppender(northArr.join(".") + " N");
  pAppender(eastArr.join(".") + " E");
  pAppender("Message: " + regexMessage.exec(txt)[0]);
}

function solve2() {

  let inputKey = document.querySelector('#str').value;
  let inputText = document.querySelector('#text').value;
  let output = document.querySelector('#result');

  let regExNorth = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
  let regExMessage = new RegExp(`${inputKey}(.*?)${inputKey}`, "g");
  let message = `Message: ${regExMessage.exec(inputText)[1]}`;

  let result;
  let north;
  let east;

  while (result = regExNorth.exec(inputText)) {
      if (result[1].toLowerCase() === 'north') {
          north = `${result[2]}.${result[3]} N`;
      } else {
          east = `${result[2]}.${result[3]} E`;
      }
  }

  createAddAppend('p', north, output);
  createAddAppend('p', east, output);
  createAddAppend('p', message, output);

  function createAddAppend(child, text, parent) {
      let childElement = document.createElement(child);
      childElement.textContent = text;
      parent.appendChild(childElement);
  }
}