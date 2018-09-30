function modifyAverage(n) {
    let array = n.toString().split('');
    while (array.reduce(((a, b) => +a +  +b))/array.length <= 5) {
        array.push(9);
    }
    console.log(+(array.reduce((a, b) => a +''+ b)));
}
modifyAverage(0)