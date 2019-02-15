function sortArray (arr, cmd) {
    if (cmd == "desc") {
        arr.sort((x,y) => y - x);
    }
    if (cmd == "asc") {
        arr.sort((x,y) => x - y)
    }
    return arr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));