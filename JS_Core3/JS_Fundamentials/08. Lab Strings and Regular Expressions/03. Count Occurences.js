function  countOccurences(string,text) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        let j = 0;
        let string2 = "";
        while (j < string.length) {
            string2 += text.charAt(j+i);
            j++;
        }
        if (string2 == string) {
            count++;
        }
    }
    console.log(count);
}