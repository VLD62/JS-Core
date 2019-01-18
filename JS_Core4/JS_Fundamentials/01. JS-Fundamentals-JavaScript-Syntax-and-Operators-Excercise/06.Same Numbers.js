function sameNumber(n) {
    let arr = Array.from(n + "");
    arr = arr.map((x) => +x);
    let arraySum = arr.reduce((total,num) => total + num);
    if ((arraySum / arr.length) == arr[0]) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(arraySum);
}
(sameNumber(5545);
