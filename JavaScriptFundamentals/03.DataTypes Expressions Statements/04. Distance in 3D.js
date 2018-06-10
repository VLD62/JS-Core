function DistanceIn3D(input) {

    let dist1 = Math.abs(input[0] - input[3]) ;
    let dist2 = Math.abs(input[1] - input[4]) ;
    let dist3 = Math.abs(input[2] - input[5]) ;

    console.log(Math.sqrt(dist1*dist1 + dist2*dist2 + dist3*dist3));
}

DistanceIn3D([3.5, 0, 1, 0, 2, -1]);