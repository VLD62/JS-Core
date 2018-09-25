function lastMonth(numArr) {
    console.log(new Date(numArr[2],numArr[1] -1 ,1).getUTCDate());
}