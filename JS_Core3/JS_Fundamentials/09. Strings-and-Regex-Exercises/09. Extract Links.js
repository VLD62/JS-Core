function extractLinks(array) {
    let regex = new RegExp(/(www\.)([a-zA-Z0-9-]+)(\.[a-z]+)+/,"g");
    for (let sentence of array) if (sentence.match(regex)) console.log(sentence.match(regex)[0]);
}