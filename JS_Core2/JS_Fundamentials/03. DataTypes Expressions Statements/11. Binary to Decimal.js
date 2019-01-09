function binaryToDecimal(string) {
    let array = (string.split('').reverse().join(''));
    let number = 0;
    for (let i = 0; i < array.length; i++) {

        number += array[i]*(Math.pow(2,i));
    }
    console.log(number)
}

binaryToDecimal('11110000')

