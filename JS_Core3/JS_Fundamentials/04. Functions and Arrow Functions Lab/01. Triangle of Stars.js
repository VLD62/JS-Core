function triangleOfStars (n) {
    function charRepater(char, count) {
        return char.repeat(count);
    }
    let base = charRepater("*",n);
    for (let i = 1; i < n; i++) {
        console.log(charRepater("*",i));
    }
    console.log(base);
    for (let i = n - 1; i >= 1; i--) {
        console.log(charRepater("*",i));
    }
}