function roadRadar(array) {
    severityCheck(array[0],limitCheck(array[1]));
    function limitCheck(area) {
        if (area == "motorway") return 130;
        if (area == "interstate") return 90;
        if (area == "city") return 50;
        if (area == "residential") return 20;
    }
    function severityCheck(v, limit) {
        if ((v - limit) > 0 && (v - limit) <= 20 ) console.log("speeding");
        if ((v - limit) > 20 && (v - limit) <= 40) console.log("excessive speeding");
        if ((v - limit) > 40)                      console.log("reckless driving");
    }
}

roadRadar([21, 'koza'])