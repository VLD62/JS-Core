function countOccurences(string,text) {
    let counter = 0;
    while (true) {
        if (text.indexOf(string) < 0) {
            break;
        }
        counter++;
        text = text.substring(text.indexOf(string) + 1);
    }
    console.log(counter)
}
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals.' +
    ' It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')