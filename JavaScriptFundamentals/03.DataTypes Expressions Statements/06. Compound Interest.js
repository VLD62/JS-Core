function CompoundInterest (parameters) {

    let P = parameters[0];
    let i = parameters[1]/100;
    let n = parameters[2];
    let t = parameters[3];



 //= P * Math.pow((1 + ((i/100)/n)),n*t)

    let interest = (P * Math.pow((1 + (i/n)), (n*t)));


    console.log(Math.round((interest*100)/100))
}

CompoundInterest([100000, 5, 12, 25])