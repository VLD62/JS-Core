function addAndRemoveElementsFromArray (array) {
    let newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] == "add" ) {
            newArray.push(i+1)
        } else {
            //newArray.splice(i-1,1)
            newArray.pop()
        }
    }
    if (newArray.length > 0 ) {
        for (var i = 0; i < newArray.length; i++) {
            console.log(newArray[i])
        }
    } else {
        console.log("Empty")
    }
}
addAndRemoveElementsFromArray(["add","add","remove","add","add"])