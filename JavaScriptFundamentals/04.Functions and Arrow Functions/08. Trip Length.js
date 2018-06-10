function tripLenght (points) {
    let x1 = points[0];
    let y1 = points[1];
    let x2 = points[2];
    let y2 = points[3];
    let x3 = points[4];
    let y3 = points[5];

    function distanceChecker (x1, y1, x2, y2 ){

        return (Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)));
    }

    let distance12 = distanceChecker(x1, y1, x2, y2);
    let distance13 = distanceChecker(x1, y1, x3, y3);
    let distance23 = distanceChecker(x2, y2, x3, y3);

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }

}

tripLenght([0, 0, 2, 0, 4, 0])