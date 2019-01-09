function rorateArray(arr) {
    let counter = arr[arr.length - 1];
    if (counter > 1000) {
        counter = counter % 1000;
    }
    arr.pop();
    for (let i = 0; i < counter; i++) {

        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}

rorateArray([1,2,3,4,2])