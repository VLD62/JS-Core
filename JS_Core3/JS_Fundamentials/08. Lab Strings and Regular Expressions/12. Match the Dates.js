function matchDates(array) {
    regex = new RegExp(/\b\d{1,2}-[A-Z][a-z]{2}-\d{4}\b/,"g");
    for (text of array) {
        if (match = regex.exec(text)) {
            let digits = match[0].split("-");
            console.log(match + ` (Day: ${digits[0]}, Month: ${digits[1]}, Year: ${digits[2]})`);
        }
    }
}
matchDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.'])