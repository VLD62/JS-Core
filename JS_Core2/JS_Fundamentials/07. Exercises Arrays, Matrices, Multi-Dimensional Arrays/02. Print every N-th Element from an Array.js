function printEveryNelementArray(arr) {
    let n = Number(arr.pop());
    for (let i = 0; i < arr.length; i= i + n) {
        console.log(arr[i]);
    }
}
printEveryNelementArray(['1' , '2' , '3' , '4' , '5' , '6'])