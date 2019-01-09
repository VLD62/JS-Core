function evenPositionElements (array) {
    let elementsString = '';
    array.forEach(function (element, index) {
        if (index % 2 == 0) { elementsString += element + " ";}
    });
    return elementsString;
}
console.log(evenPositionElements(['20', '30', '40']))