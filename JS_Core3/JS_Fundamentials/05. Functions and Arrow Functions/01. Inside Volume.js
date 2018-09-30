function insideVolume(array) {
    let newArray = array;
    let borders = [10,15,20,50,80]
    function borderChek(x,y,z) {
        let Check = (x,y,z) => (
            x >= borders[0] && x <= borders[3]
            && y >= borders[2] && y <= borders[4]
            && z >= borders[1] && z <= borders[3] ) ? "true" : "false" ;
        if (Check(array[0],array[1],array[2]) === 'true'){
            console.log("inside")
        } else {
            console.log("outside")
        }
    }
    while (newArray.length >= 3) {
        borderChek(newArray[0],newArray[1],newArray[2]);
        if (newArray.length == 3) {
            break;
        }  else {
            newArray.splice(0,3);
        }
    }
}
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)