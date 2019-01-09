function figure4Squares(n) {
    let line = "";
    let space = "";
    //rows +
    for (let i = 0; i <  (2*n -4)/2; i++) {
        line += "-";

    }
    //rows |
    for (let i = 0; i <  (2*n -4)/2; i++) {
        space += " ";

    }
    //case 1 n is odd
    if ( n % 2 != 0) {
        //head line
        console.log("+" +  line +"+" + line + "+")
        //mid line
        for (var i = 0; i < (n-3)/2; i++) {
            console.log("|" +  space +"|" + space + "|")

        }
        console.log("+" +  line +"+" + line + "+")
        for (let i = 0; i < (n-3)/2 ; i++) {
            console.log("|" +  space +"|" + space + "|")
        }
        //bottom line
        console.log("+" +  line +"+" + line + "+")
    }
    //case 2 n is even
    if ( n % 2 == 0) {
        for (let i = 0; i < n-1 ; i++) {
        }
        if (n > 2 ) {
        //head line
        console.log("+" +  line +"+" + line + "+")
        //mid line
        for (var i = 0; i < (n -4)/2; i++) {
            console.log("|" +  space +"|" + space + "|")
        }
        console.log("+" +  line +"+" + line + "+")
        for (let i = 0; i < (n -4)/2; i++) {
            console.log("|" +  space +"|" + space + "|")
        }
        //bottom line
        console.log("+" +  line +"+" + line + "+")
        } else {
            console.log("+" +  line +"+" + line + "+")
        }
    }
}

figure4Squares(2)