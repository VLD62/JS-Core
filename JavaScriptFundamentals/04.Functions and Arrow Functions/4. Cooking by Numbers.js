function  CookingByNumbers(arr) {

    let number = arr[0];
    let operations = {
         chop:  (num) => num / 2,
         dice:  (num) => Math.sqrt(num),
         spice: (num) => ++num,
         bake:  (num) => num * 3,
         fillet: (num) => 0.8*num
    }


    for (let i = 1; i < arr.length; i++) {
        const currentOperation = arr[i];
        number = operations[currentOperation](number);
        console.log(number);
    }

}

CookingByNumbers ([32, 'chop', 'chop', 'chop', 'chop', 'chop'])