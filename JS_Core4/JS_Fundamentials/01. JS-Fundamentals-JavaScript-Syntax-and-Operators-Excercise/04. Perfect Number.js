function perfectNumber(arr) {
    let perfectNumber = [];
    function is_perfect(number) {
        var temp = 0;
        for (var i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                temp += i;
            }
        }
        if (temp === number && temp !== 0) {
            perfectNumber.push(number);
        }
    }
    for (number of arr) {
        is_perfect(number);
    }
    if (perfectNumber.length > 0) {
        console.log(perfectNumber.join(", "));
        
    } else {
        console.log('No perfect number');
        
    }
}