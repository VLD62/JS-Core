function matchMultiplication(text) {
    regex = new RegExp(/(\-?[0-9]*\.?[0-9]? *?)\*( *?\-?[0-9]\.?[0-9]*)/,"g");
    function replacer(text,base,modified) {
        return text = text.replace(base,modified);
    }
    while (match = regex.exec(text)) {
        text = replacer(text,match[0],((+match[1] * +match[2])+""))
    }
    return (text);
}

console.log(matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));