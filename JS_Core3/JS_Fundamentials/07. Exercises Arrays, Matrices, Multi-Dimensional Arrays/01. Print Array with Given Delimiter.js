function arrayDelimiter(arr) {
    return arr.join(arr.pop());
}

console.log(arrayDelimiter(['One', 'Two' , 'Three' , 'Four' , 'Five' , '-']));