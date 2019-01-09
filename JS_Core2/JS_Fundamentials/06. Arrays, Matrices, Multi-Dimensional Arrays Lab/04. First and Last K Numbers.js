function firstLastKNumbers(arr) {
    let k = arr[0];
    arr.shift();
    let firstK = "";
    let lastK = "";
    for (let i = 0; i < k; i++) {
        firstK += arr[i] + " ";
    }
    console.log(firstK);
    for (let i = arr.length - k; i < arr.length; i++) {
        lastK += arr[i] + " ";
    }
    console.log(lastK);

}

firstLastKNumbers([2, 7, 8, 9])