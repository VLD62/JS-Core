function calculator(n1,n2,operator) {
    const operation = (operator) => ({"+": +n1 + +n2,"-": +n1 - +n2,"*": +n1 * +n2,"/": +n1 / +n2 })[operator];
    console.log(operation(operator));
}