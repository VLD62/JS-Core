function censorship(text, array) {
    function placeholder(string) {
        return "-".repeat(string.length);
    }
    for (string of array) {
        let regex  = new RegExp(string, "g")
        text = text.replace(regex,placeholder(string));
    }
    return text;
}