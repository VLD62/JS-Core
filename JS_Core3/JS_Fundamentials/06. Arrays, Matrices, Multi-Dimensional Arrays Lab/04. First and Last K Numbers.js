function firstLastKnumbers(array) {
    let n = array.shift();
    console.log(array.slice(0,n));
    console.log(array.slice(array.length-n,array.length));
}
firstLastKnumbers([2,
    7, 8, 9]


)