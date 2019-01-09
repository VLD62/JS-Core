function squareOfStars(n) {
    let stars = '';
    if (!n) {
     n = 5;
    }

    for (let i = 0; i < n; i++) {

        console.log(starsPrinter(n))
    }

    function starsPrinter(n) {
        stars = '';
        for (let j = 0; j < n; j++) {

            stars += "* ";
        }
        return stars;
    }
}
squareOfStars(2)