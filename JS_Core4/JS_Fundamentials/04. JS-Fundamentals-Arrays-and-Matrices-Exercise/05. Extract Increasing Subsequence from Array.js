function solve (arr) {
    arr = arr.map(x => +x);
    let maxNum = arr[0];
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= maxNum ) {
            maxNum = arr[index];
            newArr.push(arr[index]);
        }
    }
    console.log(newArr.join('\n'));
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    )

