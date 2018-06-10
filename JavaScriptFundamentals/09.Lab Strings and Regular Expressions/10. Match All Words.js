function matchAllWords(text) {
    let regex =/[a-zA-Z0-9_]+/g
    console.log(text.match(regex).join('|'))

}