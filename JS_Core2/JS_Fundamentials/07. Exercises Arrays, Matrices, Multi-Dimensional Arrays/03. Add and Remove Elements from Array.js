function addRemoveElementsArray(arr) {
    let arr2 = [];
    for (var i = 0; i < arr.length ; i++) {

        if (arr[i] == 'add') arr2.push(i+1);
        if (arr[i] == 'remove') arr2.pop();
    }
    if (arr2.length <= 0) {
        console.log("Empty")
    } else {
        for (let i = 0; i < arr2.length; i++) {
            console.log(arr2[i]);

        }
    }
}

addRemoveElementsArray(["remove" , "remove" , "remove", "remove" , "remove"] )