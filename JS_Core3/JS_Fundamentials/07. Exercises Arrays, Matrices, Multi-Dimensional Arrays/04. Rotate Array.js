function rotateArray(array) {
    let n = +array.pop();
    let i = 0;
    let finalArray = [];
    function rotate(array) {
        let newArray = [];
        array.forEach((element) => {newArray.unshift(element)})
        return newArray
    }

    while (i < n){
        i++;
        console.
            log(i)
        finalArray = rotate(rotate(array));
    }
    console.log(finalArray);;

}
(rotateArray(['Banana' ,  'Orange' ,  'Coconut' ,  'Apple',15 ]));