function matchAllWords(string) {
    return string.match(/\w+/g).join("|");
}

console.log(matchAllWords('_(Underscores) are also word characters'));