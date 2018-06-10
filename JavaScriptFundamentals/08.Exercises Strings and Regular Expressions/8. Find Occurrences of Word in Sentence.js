function findOccurencesofWordInSentence(sentence, word) {
    let regex = new RegExp("\\b"+word+"\\b","gi");
    let count = 0;
    let arr = sentence.split(" ")

    for (let word of arr) if (word.match(regex)) count++;

    console.log(count)
}
findOccurencesofWordInSentence("There was one. Therefore I bought it. I wouldn�t buy it otherwise." ,"there")