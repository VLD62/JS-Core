function rotateArray (arr) {
    let rotations = Number(arr[arr.length-1]) % (arr.length - 1);

    arr.pop();

    for (var i = 0; i < rotations; i++) {

        arr.unshift(arr[arr.length-1])
        arr.pop();

    }
    let printer='';
    for (var i = 0; i < arr.length; i++) {
        printer += arr[i] + " ";

    }

    console.log(printer)
}

rotateArray(["Banana","Orange","Coconut", "Apple", "15" ]
)