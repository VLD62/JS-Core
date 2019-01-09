function startsWith(string,substring) {
     (() => {console.log((string.slice(0,substring.length) === substring) ? "true" : "false")})();
}
startsWith('How have you been?', 'How')