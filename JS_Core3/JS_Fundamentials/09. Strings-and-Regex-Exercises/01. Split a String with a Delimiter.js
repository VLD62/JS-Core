function splitStringDelimiter(string,delimiter) {
    for (element of string.split(delimiter)){
        console.log(element);
    }
}
splitStringDelimiter('One-Two-Three-Four-Five', '-');