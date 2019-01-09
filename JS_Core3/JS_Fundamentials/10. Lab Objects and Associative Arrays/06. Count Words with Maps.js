function countWordsMap(text) {
    let wordRegex = new RegExp(/\w+/,"g");
    let wordArray = [];
    let wordMap = new Map();
    const sortStringKeys = (a, b) => a[0] > b[0] ? 1 : -1
    while (match = wordRegex.exec(text)) {
        wordArray.push(match[0].toLowerCase());
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
        wordMap.set(word , count);
    }
    for (let pairs of new Map([...wordMap].sort(sortStringKeys)).entries()) {
        console.log(`'${pairs[0]}'` + " -> " + pairs[1] + " times");
    }
}
countWordsMap('Far too slow, you\'re far too slow.');