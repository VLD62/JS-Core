function SplitStringWithDelimiter (string, delimiter) {

    let arr = string.split(`${delimiter}`);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

SplitStringWithDelimiter("One-Two-Three-Four-Five","-")