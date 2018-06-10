function extractNonDecreasingSubsequenceFromArray (arr) {
    let newArr = []
    let maxnNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= maxnNum) {
            if (arr[i] > arr [i-1]) {
               newArr.push(arr[i])
               console.log("koza i")
            }
            maxnNum = arr[i]
        }

    }

    for (let element of newArr) console.log (element);

}
extractNonDecreasingSubsequenceFromArray(['1' , '3' , '8' , '4' , '10' , '12' , '3' , '2' , '24'] )