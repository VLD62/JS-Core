function converterToCoins (number, arr) {
    let result = [];
    arr = arr.sort((x,y) => y - x);

    while (number > 0) {
        for (element of arr) {
            if (number - element > 0) {
                result.push(element);
                number = number - element;
            }
        }
    }
    console.log(result.join(", "));
}
converterToCoins(46, [10, 25, 5, 1, 2]);