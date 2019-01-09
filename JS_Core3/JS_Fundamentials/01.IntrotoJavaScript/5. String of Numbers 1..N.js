function stringOfNumbers(n) {
    let print ='';
    let count = 0

    while(+n - 1 >= count){
        count++
        print += ''+count;
    }
    console.log(print);
}
stringOfNumbers(11)