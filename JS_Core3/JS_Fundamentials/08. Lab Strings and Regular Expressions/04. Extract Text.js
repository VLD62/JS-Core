function extractText(string) {
    let result = [];
    let reg = new RegExp(/\((.*?)\)/,"g");
    while (match = reg.exec(string)) {
        result.push(match[1]);
    }
    console.log(result.join(", "));
}