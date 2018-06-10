function quadraticEquation(a, b, c) {
    let D = b*b - 4*a*c;
    if (D > 0) {
    console.log(((-1)*b - Math.sqrt(D))/(2*a));
    console.log(((-1)*b + Math.sqrt(D))/(2*a));
    } else if (D == 0) {
        console.log((-1)*b/(2*a) )
    } else {
        console.log("No");
    }
}

quadraticEquation(6,11,-35)