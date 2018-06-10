function repeatStringNtimes(string, N) {
    let str = ''
    for (var i = 0; i < Number(N); i++) {

        str += string+"";
    }

    console.log(str)

    //shortest solution return string.repeat(N)

}

repeatStringNtimes("magic is real","3")