function printArrayWithGivenDelimiter (input){
    let delmiter  = input[input.length - 1];
    let result = '';
    input.pop();

    for (var i = 0; i < input.length; i++) {

        if (i ==0 ) {
            result += input[i];
        } else {
            result += delmiter + input[i];
        }

    }
    console.log(result)
}