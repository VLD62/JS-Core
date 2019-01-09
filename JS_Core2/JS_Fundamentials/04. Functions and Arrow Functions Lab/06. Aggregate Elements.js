function aggregateElements(array) {

    aggregate(array, 0, (x, y) => x + y);
    aggregate(array, 0, (x, y) => x + 1/y);
    aggregate(array, "", (x, y) => x + y);

    function aggregate(array, intialValue, func) {
        for (let i = 0; i < array.length; i++) {
            intialValue = func(intialValue,array[i])
        }
        console.log(intialValue)
    }

}

aggregateElements([2, 4, 8, 16])