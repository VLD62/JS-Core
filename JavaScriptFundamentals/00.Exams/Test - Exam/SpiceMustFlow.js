function spiceMustFlow (str) {
    let yield = Number(str);
    let days = 0;
    let totalYield = 0;
    while (yield >= 100) {
        totalYield += yield - 26;
        yield = yield - 10;
        days++;
    }
    console.log(days);
    if (totalYield - 26 < 0){
        console.log(0);
    } else {
        console.log(totalYield - 26);
    }
}
spiceMustFlow(200)