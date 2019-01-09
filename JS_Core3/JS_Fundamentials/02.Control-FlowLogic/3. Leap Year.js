function leapYear(yyyy) {
    if ((yyyy % 400 == 0) || ((yyyy % 4 == 0) &&(yyyy % 100 != 0))) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

leapYear(2001)