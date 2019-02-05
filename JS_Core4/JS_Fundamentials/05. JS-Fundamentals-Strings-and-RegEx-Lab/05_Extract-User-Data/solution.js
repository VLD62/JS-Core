function solve() {
  function pAppneder(text) {
    let p = document.createElement('p');
    p.textContent = text;
    (document.getElementById('result')).appendChild(p);
  }
  let arr = JSON.parse(document.getElementById('arr').value);
  
  function nameValidaiton(name) {
    let regex = new RegExp(/\b[A-Z][a-z]* [A-Z][a-z]*\b/, "g");
    return name.match(regex);
  }
  function phoneValidaiton(phone) {
    let regex = new RegExp(/(\+\d{3}\s\d\s\d{3}\s\d{3})|(\+\d{3}-\d-\d{3}-\d{3})/, "g");
    return phone.match(regex);
  }
  function emailValidaiton(email) {
    let regex = new RegExp(/\b[a-z0-9]+@[a-z]+.[a-z]{2,3}\b/, "g");
    return email.match(regex);
  }
  for (element of arr) {
   if (emailValidaiton(element) != null && nameValidaiton(element) != null 
   && phoneValidaiton(element)) {
    pAppneder("Name: " + nameValidaiton(element));
    pAppneder("Phone Number: " + phoneValidaiton(element));
    pAppneder("Email: " + emailValidaiton(element));
    pAppneder("- - -");
   } else {
    pAppneder("Invalid data");
    pAppneder("- - -");
   }
  }
}