function simpleMailValidaiton(email) {
    let regex = new RegExp(/\b[a-zA-Z0-9]+@[a-z]+.[a-z]+\b/,"g");
    let check = (text) => (regex.test(email) ? "Valid" : "Invalid");
    return check(email);
}

console.log(simpleMailValidaiton('invalid@emai1.bg'));