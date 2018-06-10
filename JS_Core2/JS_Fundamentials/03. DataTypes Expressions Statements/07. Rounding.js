function rounding(array) {
    let n = array[0];
    let p = array[1];

    if (p > 15) {
        p = 15;
    }

    console.log(Math.round(n * Math.pow(10,p)) / Math.pow(10,p));
}

rounding([10.5, 3]);