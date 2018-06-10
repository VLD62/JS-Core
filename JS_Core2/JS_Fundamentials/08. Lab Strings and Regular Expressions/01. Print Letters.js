function printLetters(str) {
    let arr = str.split('');
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`);

    }
}
printLetters('Hello, World!');