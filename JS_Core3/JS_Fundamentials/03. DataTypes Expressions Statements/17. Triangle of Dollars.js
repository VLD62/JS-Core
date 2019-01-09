function triangleOfDollars(n) {
    let symbol = '$';
    let figure = '';
    for (let i = 1; i <= n; i++) {
        figure += symbol.repeat(i)+'\n';
    }
    console.log(figure);
}