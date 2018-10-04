function negativePositiveNumbers(array) {
    let newArray = [];
    array.forEach(function (number) {
        if (number>= 0) {
            newArray.push(number);
        } else {
            newArray.unshift(number);
        }
    })
    return newArray;
}
console.log(negativePositiveNumbers([7, -2, 8, 9]))