function validityChecker (points) {

    let x1 = points[0];
    let y1 = points[1];
    let x2 = points[2];
    let y2 = points[3];

    function distanceCheker (x1, y1, x2, y2 ){
        if (Math.sqrt(((x2 - x1)*(x2 - x1))+ ((y2 - y1)*(y2 - y1))) ===
            parseInt( Math.sqrt(((x2 - x1)*(x2 - x1))+ ((y2 - y1)*(y2 - y1)) , 10))){
            return "valid";
        } else {
            return "invalid";
        }
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is `+distanceCheker(x1, y1, 0, 0));
    console.log(`{${x2}, ${y2}} to {0, 0} is `+distanceCheker(x2, y2, 0, 0))
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is `+distanceCheker(x1, y1, x2, y2));
}

validityChecker([2, 1, 1, 1])