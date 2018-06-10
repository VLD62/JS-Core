function  BoxesAndBottles (n,k) {
    if (k > n ) {
        console.log(1)
    } else {
        console.log(Math.ceil(n/k))
    }

}

BoxesAndBottles(5,2);