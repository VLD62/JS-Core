function maxElement(arr) {
    return arr.sort((x,y) => y - x)[0];
}
console.log(maxElement([10, 20, 5]));