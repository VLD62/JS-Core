function lastKnumbersSequence(n,k) {
    let arr = [];
    let number = 0;
    for (let i = 0; i < n ; i++) {
        for (var j = k; j > 0; j--) {
            if (i-j >= 0) number += arr[i-j];
        }
        if (number == 0) {
            arr.push(1);
        } else {
            arr.push(number);
        }
        number = 0;
    }
    console.log(arr.join(" "));
}

lastKnumbersSequence(
    8, 2
)