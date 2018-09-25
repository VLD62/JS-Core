function quadraticEquation(a,b,c) {
    let X1 = 0;
    let X2 = 0;
    let D = Math.pow(b,2) - 4*(a*c);
    if (D > 0) {
        X1 = (((-1)*b+Math.sqrt(D))/(2*a));
        X2 = (((-1)*b-Math.sqrt(D))/(2*a));
        console.log(Math.min(X1,X2));
        console.log(Math.max(X1,X2));
    } else if (D == 0) {
        console.log(((-1)*b)/(2*a));
    } else {
        console.log("No");
    }
}