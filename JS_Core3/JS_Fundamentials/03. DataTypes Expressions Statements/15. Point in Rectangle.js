function pointInRectangle(numArr) {

    if (numArr[0] >= numArr[2] && numArr[0] <= numArr[3]) {

        if (numArr[1] >= numArr[4] && numArr[1] <= numArr[5]) {

            console.log("inside");

        } else {
            console.log("outside");

        }

    } else {
        console.log("outside");

    }
}