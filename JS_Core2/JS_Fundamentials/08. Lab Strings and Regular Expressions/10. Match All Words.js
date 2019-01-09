function matchAllWords(string) {
    console.log(string.match(/\w+/g).join("|"));
}
matchAllWords('_(Underscores) are also word characters')