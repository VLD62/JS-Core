function biggestElement(array) {
    let number = array[0][0];
    for (var i = 0; i < array.length; i++) {
        for (let element of array[i]) {
            if (element > number) {
                number = element;
            }
        }
    }
    return number;
}
