function sortArrayBy2Criteria (arr) {
    function elementLenghtCompare (a, b) {
        let x = a.toUpperCase(); // ignore upper and lowercase
        let y = b.toUpperCase(); // ignore upper and lowercase
        if (x.length < y.length ) {
            return -1;
        } else if (x.length > y.length ) {
            return 1;
        } else {
            return x < y ? - 1 : x > y ? 1 : 0;
        }
    }
    arr.sort(elementLenghtCompare);

    for (let element of arr) console.log (element);

}

sortArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])