function  primeNumberChecker(n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (n <= 0 || n == 1) {
        isPrime= false;
    }
    console.log(isPrime);
}
primeNumberChecker(-5)