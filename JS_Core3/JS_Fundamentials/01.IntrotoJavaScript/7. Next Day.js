function nextDay(year,month,day) {
    let nextDay =((new Date(year, month - 1, day + 2)).toISOString().substring(0, 10));
    console.log(+nextDay.toString().substring(0, 4)+ '-' + (+nextDay.toString().substring(5, 7))
        + '-' + (+nextDay.toString().substring(8, 10)));
}
nextDay(2016, 9, 30)