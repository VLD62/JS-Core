function evenNumbers1toN(n) {
    for (let i = 1; i <= +n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

evenNumbers1toN(5);