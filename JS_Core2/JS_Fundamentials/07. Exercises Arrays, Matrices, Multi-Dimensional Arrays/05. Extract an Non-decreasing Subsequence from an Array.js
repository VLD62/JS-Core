function  extractNonDecreasingSequence(array) {
    array.map(Number);
    let biggestOne = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggestOne) {
            biggestOne = (array[i]) ;
            console.log(biggestOne);
        }

    }
}
extractNonDecreasingSequence(['1' , '3' , '8' , '4' , '10' , '12' , '3' , '2' , '24'])