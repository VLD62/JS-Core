function expressionSplit(string) {
    regex = new RegExp(/,|;|\\|\.|\)|\(| |\t/,"g");
    let array = string.split(regex).filter(n => n);
    for (element of array){
        console.log(element);
    }
}
