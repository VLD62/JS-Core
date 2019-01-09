function insideVolume(array) {
    let x1 = 10;
    let x2 = 50;
    let y1 = 20;
    let y2 = 80;
    let z1 = 15;
    let z2 = 50;


    for (let i = 0; i < array.length; i+=3) {

        let x = array[i];
        let y = array[i+1];
        let z = array[i+2];

        if (inVolume(x, y, z)) {
            console.log("inside");

        } else {
            console.log("outside");
        }

    }

    function inVolume(x,y,z) {
        if ( x >= x1 && x <= x2 && y >= y1
            && y <=y2 && z >= z1 && z <=z2 ) {
            return true;
        } else {
            return false;
        }
    }
}

insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)