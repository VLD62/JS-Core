function chessBoard (n){
    console.log("<div class=\"chessboard\">");

    for (let i = 1; i <= n; i++) {
        console.log("   <div>");

        if ( i % 2 == 0) {
            for (let j = 1; j <= n; j++) {

                if (j % 2 != 0 ) {
                    color = "white"
                } else {
                    color = "black"
                }
                console.log(`    <span class="${color}"></span>`);
            }
        } else {
            for (let j = 0; j < n; j++) {

                if (j % 2 != 0 ) {
                    color = "white"
                } else {
                    color = "black"
                }
                console.log(`    <span class="${color}"></span>`);
            }
        }

        console.log("   </div>");
        }



    console.log("</div>");
}

chessBoard(2);