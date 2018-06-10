function TriangleOfStars (number) {
    function printStars(count) {
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= number; i++) {
        printStars(i);
    }

    for (let i = number-1; i > 0; i--) {
        printStars(i);
    }
}

TriangleOfStars(3)