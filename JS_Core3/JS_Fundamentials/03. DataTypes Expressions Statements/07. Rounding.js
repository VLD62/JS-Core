function rounding(arrNum) {
    let n = arrNum[0];
    let p = arrNum[1];

    if (p > 15) {
        p = 15;
    }

    console.log(+n.toFixed(p));
}
rounding([10.5, 3])