function roadRadar(array) {
    const limit = (area) => ({
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
    })[area];
    
    function checkSpeed(currentSpeed,limitSpeed) {
        let speedDiff = currentSpeed - limitSpeed;
        if (speedDiff > 0 &&speedDiff <= 20) return "speeding";
        else if (speedDiff >= 20 && speedDiff <=40) return "excessive speeding";
        else if (speedDiff <= 0) return "" ;
        else return "reckless driving";
    }
    console.log(checkSpeed(array[0],limit(array[1])));
}
roadRadar([40, 'city'])