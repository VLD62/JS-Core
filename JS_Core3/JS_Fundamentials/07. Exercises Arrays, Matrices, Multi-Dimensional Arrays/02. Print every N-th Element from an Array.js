function printNthElementArray(arr) {
    let step = arr.pop();
    arr.filter(function (el, index, arr) {
        if (index % step == 0) {
            console.log(el);
        }
    });
}

printNthElementArray([5, 20, 31, 4, 20, 2]);