function wordsUppercase(string) {
    console.log((string.split(/\W+/g).map((element) => element.toUpperCase()).filter(n => n).reduce((a, b) => a + ', '+ b)));
}