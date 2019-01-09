function biggest3Numbers(array) {
    let maxNum = array[0];

    if (array[1] > array[0]) {
        maxNum = array[1];
    }

    if (array[2] > maxNum) {
        maxNum = array[2];
    }
    console.log(maxNum);
}