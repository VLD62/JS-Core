function compoundInterest(numArr) {
    P = numArr[0];
    i = numArr[1]/100;
    n = 12/numArr[2];
    t = numArr[3];
    let total = P*( Math.pow(1+(i/n),n*t));
    console.log(Math.round(total*100)/100);
}
compoundInterest([1500, 4.3, 3, 6])