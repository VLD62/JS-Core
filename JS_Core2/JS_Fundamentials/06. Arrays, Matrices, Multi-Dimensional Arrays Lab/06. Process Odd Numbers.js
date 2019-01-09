function processOddNumbers(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr2.push(arr[i]*2);
        }
    }
    console.log(arr2.reverse().join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]
)