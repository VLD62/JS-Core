function primeNumberChecker (n) {
    let isPrime;
    if ( n <= 1 ) {
        isPrime = false;
    } else if ( n = 2 )   {
        isPrime = true;
    } else if ( n % 2 == 0 )   {
        isPrime = false;
    } else {

        let boundary = Math.floor(Math.sqrt(n));

        for (let i = 3; i <= boundary; i+=2)
        {
            if (number % i == 0)  {
                isPrime = false;
            };
        }
    }
    console.log(isPrime);
}

primeNumberChecker(8)