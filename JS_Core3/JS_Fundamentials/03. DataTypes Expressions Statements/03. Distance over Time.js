function distanceOverTime(arrNum) {
    console.log(Math.abs(arrNum[0]*(arrNum[2]/3600) - arrNum[1]*(arrNum[2]/3600))*1000);
}

distanceOverTime([11, 10, 120])