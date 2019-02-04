function solve() {
  let string = document.getElementById("arr").value;
  let BulgarianArmy, CivilProtection, Diplomatic, Foreigners, Province, Sofia, Transient = [];
  function pAppender(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    document.getElementById('result').appendChild(p);
  }
  let regBA = new RegExp(/"BA \d{3} \d{3}"/,"g");
  BulgarianArmy = string.match(regBA);
  if (BulgarianArmy.length > 0) {
    pAppender("BulgarianArmy -> " + BulgarianArmy.length);
  }

  let regCP = new RegExp(/"CP \d{2} \d{3}"/,"g");
  CivilProtection = string.match(regCP);
  if (CivilProtection.length > 0) {
    pAppender("CivilProtection -> " + CivilProtection.length);
  }

  let regDP = new RegExp(/"(C|T){1,2} \d{4}"/,"g");
  Diplomatic = string.match(regDP);
  if (Diplomatic.length > 0) {
    pAppender("Diplomatic -> " + Diplomatic.length);
  }

  let regFO = new RegExp(/"X{2} \d{4}"/,"g");
  Foreigners = string.match(regFO);
  if (Foreigners.length > 0) {
    pAppender("Foreigners -> " + Foreigners.length);
  }

  let regPR = new RegExp(/"[a-bd-zA-BD-Z]{1} \d{4} [a-zA-Z]{1,2}"|"[a-zA-Z]{1}[c-zC-Z]{1} \d{4} [a-zA-Z]{1,2}"/,"g");
  Province = string.match(regPR);
  if (Province.length > 0) {
    pAppender("Province -> " + Province.length);
  }

  let regSF = new RegExp(/"(C|CA|CB) \d{4} [a-zA-Z]{1,2}"/,"g");
  Sofia = string.match(regSF);
  if (Sofia.length > 0) {
    pAppender("Sofia -> " + Sofia.length);
  }

  let regTR = new RegExp(/"\d{3} [a-zA-Z]{1} \d{3}"/,"g");
  Transient = string.match(regTR);
  if (Transient.length > 0) {
    pAppender("Transient -> " + Transient.length);
  }

}