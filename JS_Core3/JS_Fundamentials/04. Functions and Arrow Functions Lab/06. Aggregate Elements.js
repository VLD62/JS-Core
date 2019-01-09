function aggregateEelements(array) {
    const add = (a , b) => a + b;
    const concat = (a, b) => a + '' + b;
    console.log(array.reduce(add));
    console.log(array.map((element) =>{ return 1/element; }).reduce(add));
    console.log(array.reduce(concat));
}