function countWordsText(text) {
    let wordRegex = new RegExp(/\w+/,"g");
    let wordArray = [];
    let wordObj = {};
    while (match = wordRegex.exec(text)) {
        wordArray.push(match[0]);
    }
    let uniq = element => [...new Set(element)];
    for (word of uniq(wordArray)) {
        let count = 0;
        if (count == 0) {
            for (let i = 0; i < wordArray.length; i++) {
                if (word === wordArray[i]) {
                    count++
                }
            }

        }
        wordObj[word] = count
    }
    console.log(JSON.stringify(wordObj));
}
countWordsText('Far too slow, you\'re far too slow.');