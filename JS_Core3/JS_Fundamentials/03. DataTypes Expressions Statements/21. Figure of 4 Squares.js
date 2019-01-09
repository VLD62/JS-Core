function figure4Squares(n) {

    let row = "+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+";
    let col = "|" + " ".repeat(n-2) + "|" + " ".repeat(n-2) + "|";

    if ( n % 2 == 0) {
        for (let i = 1; i <= n-1; i++) {
            if (i == 1 || i == (n/2) || i == n - 1 ) {
                console.log(row);
            } else {
                console.log(col)

            }
        }
    } else {
        for (let i = 1; i <= n; i++) {
            if (i == 1 || i == Math.ceil(n/2) || i == n ) {
                console.log(row);
            } else {
                console.log(col)

            }
        }
    }
}