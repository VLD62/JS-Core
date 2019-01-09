function modifyAverage(number) {
    let array = number.toString().split("");

    (function nineAppender() {
        while (totalSym(array)/array.length <= 5) {
            number += "9";
            array = number.toString().split("");
        }
        console.log(number);
    })()

    function totalSym (array) {
        let totalSum = 0;
        for (let i = 0; i < array.length; i++) {
            totalSum += parseInt(array[i]);

        }
        return totalSum;
    }
}

modifyAverage(5835)