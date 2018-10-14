function wordOccurences(string,word) {
    let regex = new RegExp("\\b" + word + "\\b" ,'gi')
    let count = 0;
    while (match = regex.exec(string.split(" "))) {
        count++
    }
    return count;
}

console.log(wordOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there'

));;

function wordOccurences2(string,word) {
    let count = 0;
    for (w of string.split(" ")){
        if (w.toLowerCase() === word.toLowerCase()) {
            count++
        }
    }
    return count;
}