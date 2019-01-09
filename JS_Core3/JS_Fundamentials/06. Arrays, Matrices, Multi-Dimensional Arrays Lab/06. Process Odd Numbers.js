function processOddNumbers(array) {
    let newArry = [];
    array.forEach(function (element, index) {
        if (index % 2 != 0) {
            newArry.unshift(+element*2);
        }
    })
    return newArry;
}