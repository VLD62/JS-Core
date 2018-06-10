function compoundInterest (array) {
    let P = array[0];
    let i = array[1]/100;
    let n = 12/array[2];
    let t = array[3];

    let F = P*(Math.pow((1+i/n),n*t));

    console.log(Math.round(F * 100) / 100);
}

compoundInterest([100000, 5, 12, 25])