function negativePositiveNumbers (array) {
    let arrayB = [];

    for (var i = 0; i < array.length; i++) {
       let n = Number(array[i])
        if (n >= 0 ) {
           arrayB.push(n)
        } else {
            arrayB.unshift(n)
        }

    }
    console.log(arrayB.join('\n'))
}

negativePositiveNumbers([7, -2, 8, 9])