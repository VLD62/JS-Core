function captureTheNumbers(array) {
    let text = array.join("");
    regex = new RegExp(/\d+/,"g");
    let result = []
    while (match = regex.exec(text)) {
        result.push(match[0]);
    }
    return (result.join(" "));
}

console.log(captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
));