function roadRadar (input) {
    let speed = input[0];
    let area = input[1];
    function getLimit(area) {
        switch (area) {
            case 'motorway'   : return 130;
            case 'interstate' : return  90;
            case 'city'       : return  50;
            case 'residential': return  20;

        }
    }

    function  getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed >= 1 &&  overSpeed <= 20) {
               return 'speeding';
            } else if (overSpeed > 20 &&  overSpeed <= 40) {
                return 'excessive speeding';
            } else if (overSpeed  > 40 ) {
                return 'reckless driving';
            }
        }
    }

    if (getInfraction(speed, getLimit(area))) {
        console.log(getInfraction(speed, getLimit(area)));
    }
}
roadRadar([21, 'residential'])

