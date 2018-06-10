function validityChecker(array) {
    console.log(`{${array[0]}, ${array[1]}} to {0, 0} is ${validator(distanceCalculator(array[0],array[1],0,0))}`);
    console.log(`{${array[2]}, ${array[3]}} to {0, 0} is ${validator(distanceCalculator(array[2],array[3],0,0))}`);
    console.log(`{${array[0]}, ${array[1]}} to {${array[2]}, ${array[3]}} is ${validator(distanceCalculator(array[0],array[1],array[2],array[3]))}`);

    function validator(distance) {
        if (Number.isInteger(distance)) {
            return "valid";
        } else {
            return "invalid";
        }
    }

    function distanceCalculator (x1,y1,x2,y2) {
        distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
        return distance;
    }

}