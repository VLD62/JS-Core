function endsWith(string,substring) {
    (() => {console.log((string.endsWith(substring)) ? "true" : "false")})();
}
endsWith('This sentence ends with fun?','fun?');