function matchTheDates(array) {
    let string = array.join(" ");

    let regex = new RegExp(/\b(\d{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g)

    let matches = [];

    while ( match = regex.exec(string)) {
        matches.push(match[0]);

    }
    matches.forEach(function (element) {
        let array = element.split("-");

        console.log(`${element} (Day: ${array[0]}, Month: ${array[1]}, Year: ${array[2]})`)
    })

}
matchTheDates(['I am born on 30-Dec-1994.','This is not date: 512-Jan-1996.','My father is born on the 29-Jul-1955.'])