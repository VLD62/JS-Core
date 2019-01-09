function imperialUnits(n) {

    let foot = Math.floor(n/12);
    let inch = 0
    if (n % 12 != 0) {
        inch  = n - foot*12;
    }
    console.log(`${foot}'-${inch}"`)
}

imperialUnits(11)