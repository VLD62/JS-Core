function solve(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == 'add') {
            newArr.push(index+1);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length > 0) {
        console.log(newArr.join("\n"));
    } else {
        console.log("Empty");
    }
}
solve (['add', 
'add', 
'remove', 
'add', 
'add']

)