function secretData (arrOfStrings) {
    let patterns = {
         nameRegex : /(\*[A-Z]{1}[A-Za-z]*)(?= |\t|$)/g,
         numRegex : /(\+[0-9\-]{10})(?= |\t|$)/g,
         idRegex : /(\![a-zA-Z0-9]+)(?= |\t|$)/g,
         baseRegex : /(\_[a-zA-Z0-9]+)(?= |\t|$)/g
    }


    let output = '';
    for (let string of arrOfStrings) {
        for (const pattern of Object.values(patterns)) {
            string = string.replace(pattern, function (match) {
                return '|'.repeat(match.length)
            })
        }
            output += string+'\n'
    }
    return output;
}
secretData()