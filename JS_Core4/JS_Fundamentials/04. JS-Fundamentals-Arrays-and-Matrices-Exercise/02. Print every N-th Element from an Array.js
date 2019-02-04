function solve(arr) {
    let n = arr.pop();
    for (let index = 0; index < arr.length; index++) {
        if (index % n == 0) {
            console.log(arr[index]);
        } ;
    }
}
solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']


)