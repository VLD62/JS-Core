function treasureLocator(array) {
    let numArray = array;
    function borderCheck(x,y) {
        if (x >= 0 && x <= 2 && y >= 6 && y <= 8) return "Tonga";
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3) return "Tuvalu";
        if (x >= 4 && x <= 9 && y >= 7 && y <= 8) return "Cook";
        if (x >= 5 && x <= 7 && y >= 3 && y <= 6) return "Samoa";
        if (x >= 8 && x <= 9 && y >= 0 && y <= 1) return "Tokelau";
        return "On the bottom of the ocean";
    }
    while (numArray.length > 2) {
        console.log(borderCheck(numArray[0],numArray[1]));
        numArray.shift();
        numArray.shift();
    }
    console.log(borderCheck(numArray[0],numArray[1]));
}