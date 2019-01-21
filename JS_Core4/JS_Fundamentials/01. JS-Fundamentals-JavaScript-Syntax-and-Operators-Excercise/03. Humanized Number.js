function humanizedNumber (text) {
    let result = [];
    let reg = new RegExp(/\d+/,"g");
    while (match = reg.exec(text)) {
        result.push(match[0]);
        if (+match[0] > 10  &&  +match[0] <= 13) {
            console.log(match[0]+"th");
        } else {
            if (match[0][match[0].length - 1] == "1") {
                console.log(match[0]+"st");
            } else if (match[0][match[0].length - 1] == "2") {
                console.log(match[0]+"nd");
            } else if (match[0][match[0].length - 1] == "3") {
                console.log(match[0]+"rd");
            } else {
                console.log(match[0]+"th");
            }
        }
    }
}
