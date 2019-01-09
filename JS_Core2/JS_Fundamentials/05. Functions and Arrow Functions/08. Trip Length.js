function tripLenght(array) {

    console.log(tripTotal(distanceCalculator(array[0],array[1],array[2],array[3]),
        distanceCalculator(array[0],array[1],array[4],array[5]),
        distanceCalculator(array[2],array[3],array[4],array[5])));

    function tripTotal(first, second, third) {
        if ((first <= second) && (second => third)) {
            return '1->2->3: ' + (first + third);
        }
        else if ((first <= third) && (second < third)) {
            return '2->1->3: '+ (first + second);
        }
        else {
            return '1->3->2: ' + (second + third);
        }
    }

    function distanceCalculator (x1,y1,x2,y2) {
        return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
    }

}

tripLenght([-1, -2, 3.5, 0, 0, 2])