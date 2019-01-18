function commonNumbers (arr1, arr2, arr3) {
    let arrCommon = [];
    function median(numbers) {
        // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
        let median = 0
        let numsLen = numbers.length;
        if (
            numsLen % 2 === 0 // is even
        ) {
            // average of two middle numbers
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else { // is odd
            // middle number only
            median = numbers[(numsLen - 1) / 2];
        }
     
        return median;
    }

    for (element of arr1) {
        for (element2 of arr2) {
            if (element == element2) {
                for (element3 of arr3) {
                    if (element3 == element2) {
                        arrCommon.push(element3);
                    }
                }
            }

        }

    }
    console.log("The common elements are " + arrCommon.sort((x,y) => x - y).join(", ") + ".");
    console.log("Average: " + arrCommon.reduce((a,b) => a + b, 0) / arrCommon.length + ".");
    console.log("Median: " + median(arrCommon) + ".");
}
commonNumbers([5, 6, 50, 10, 1, 2],
    [5, 4, 8, 50, 2, 10], 
    [5, 2, 50]
    );