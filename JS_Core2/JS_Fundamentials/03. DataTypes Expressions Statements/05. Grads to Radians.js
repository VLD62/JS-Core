function gradsToRadians(x) {
    let x1 = x % 400;
    if (x1 < 0) {
         x1 = x1 + 400;
    }
    console.log(x1/400 * 360);
}

gradsToRadians(-50)