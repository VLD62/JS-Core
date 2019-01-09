function triangleOfStars(n) {
    let stars = '';

    for (let i = 0; i < n; i++) {
            stars += '*';
            console.log(stars);

    }

    for (let i = n - 1; i > 0; i--) {
        stars = '';
        for (let j = i; j > 0; j--) {
            stars += '*';

        }

        console.log(stars);

    }
}
triangleOfStars(2);