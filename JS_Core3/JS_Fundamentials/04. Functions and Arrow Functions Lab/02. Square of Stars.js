function squareOfStars(n) {
    if (n == '') {
        n = 5;
    }
    function charRepater(char, count) {
        console.log(char.repeat(count));
    }
    for (let i = 0; i < n; i++) {
        charRepater("* ",n)
    }
}