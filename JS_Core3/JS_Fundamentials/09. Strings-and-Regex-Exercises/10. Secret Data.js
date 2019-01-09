function secretData(array) {
    let clientName = new RegExp(/(\*[A-Z]{1}[A-Za-z]*)(?= |\t|$)/,"g");
    let phoneNum = new RegExp(/(\+[0-9\-]{10})(?= |\t|$)/,"g");
    let idRegex = new RegExp(/(\![a-zA-Z0-9]+)(?= |\t|$)/,"g");
    let baseName = new RegExp(/(\_[a-zA-Z0-9]+)(?= |\t|$)/,"g");
    let string = [];
    function stringReplacer(n) {
        return "|".repeat(n);
    }
    for (let element of array) {
        console.log(element.replace(clientName, match => stringReplacer(match.length))
            .replace(phoneNum, match => stringReplacer(match.length))
                .replace(idRegex, match => stringReplacer(match.length))
                    .replace(baseName, match => stringReplacer(match.length))
        );
    };
}
secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I cant really remember...',
    'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']
)
