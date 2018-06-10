function checkIfStringStartsWithGivenSubstring (string, substring) {
    let regEx = new RegExp("^" + substring,'g')
    if (string.match(regEx)) {
        console.log("true")
    } else {
        console.log("false")
    }
}

checkIfStringStartsWithGivenSubstring("The quick brown fox…","The quick brown fox…")