function validityChecker(arr) {
    function distanceCheker(x1,y1,x2,y2) {
        if(Number.isInteger(Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2)))){
            return 'valid';
        } else {
            return 'invalid';
        };
    }
    console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is ` + distanceCheker(arr[0],arr[1],0,0));
    console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is ` + distanceCheker(arr[2],arr[3],0,0));
    console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is ` + distanceCheker(arr[0],arr[1],arr[2],arr[3]));
}
validityChecker([2, 1, 1, 1])