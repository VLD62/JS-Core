function printArrayWithDelimiter(array) {
    let n = array[array.length - 1];
    array.pop();
    console.log(array.join(n));
}

printArrayWithDelimiter(['One',
    'Two',
    'Three' ,
    'Four' ,
    'Five',
    '-'])