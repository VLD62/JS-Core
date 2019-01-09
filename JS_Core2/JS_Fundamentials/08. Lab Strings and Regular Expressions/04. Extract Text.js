function extractText(string) {
    let regex = new RegExp(/\((.*?)\)/g)
    let matches = "";
    while ( match = regex.exec(string)) {
        matches+= match[1]+", ";
    }
    console.log(matches.substring(0, matches.length - 2));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')