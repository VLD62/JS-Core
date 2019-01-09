function concatenateAndReverse (array) {
    console.log((array.map(((element) => element.split("").reverse().join(""))).reverse()).join(""));
}