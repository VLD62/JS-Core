function sumNumbersNM(n,m){
    let sum = 0;
    for (let i = +n;  i <= +m ; i++) {
        sum += +i;
    }
    console.log(sum);
}
sumNumbersNM(0,2)