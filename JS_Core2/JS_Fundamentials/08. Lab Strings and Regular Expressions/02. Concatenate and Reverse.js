function concatenateReverse(array) {
    console.log((array.join("")).split("").reverse().join(""));
}

concatenateReverse(['I', 'am', 'student'])