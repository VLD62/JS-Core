function extractIncreasingSubsequenceFromArray (array) {
    let biggest = +array[0];
    console.log(biggest+'\n'+(array.filter(
            (currentValue,index,array) =>
                (Math.max(array[index-1],+currentValue) == +currentValue && +currentValue >= biggest ))
    ).join('\n'));
}

extractIncreasingSubsequenceFromArray([1 , 0 ,0,3,0,5,4,3,2, 8 , 9 , 10 , 12 , 3 , 2,3,4 , 24])

//(arr, biggestNumber = -Infinity) => arr.filter(e => ([ret, biggestNumber] = [parseInt(e) >= biggestNumber, Math.max(biggestNumber, e)])[0]).join('\n');