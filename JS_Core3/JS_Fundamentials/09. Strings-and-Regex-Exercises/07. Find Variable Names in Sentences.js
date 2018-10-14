function findVariableNamesSentences(string) {
    regex = new RegExp(/\b_{1}[a-zA-Z0-9]+\b/,"g");
    let result = string.match(regex);
    return (result.map(x => x.replace(/_/g,""))).join(",");
}

function findVariableNamesSentences2(string) {
    regex = new RegExp(/\b_{1}[a-zA-Z0-9]+\b/,"g");
    let result = []
    while (match = regex.exec(string)) {
        result.push(match[0].slice(1,match[0].length));
    }
    return (result.join(","));
}
console.log(findVariableNamesSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));
