function distanceOverTime (input) {

    let dist1 =  input[0] * input[2] / 3.6 ;
    let dist2 =  input[1] * input[2] / 3.6 ;

    console.log(Math.abs(dist1 - dist2));
}


distanceOverTime([0, 60, 3600])