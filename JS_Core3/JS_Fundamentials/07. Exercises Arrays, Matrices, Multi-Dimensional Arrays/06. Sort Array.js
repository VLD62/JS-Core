function sortArray(array) {
    return array.sort((a, b) =>  a.length - b.length || a.localeCompare(b)).join('\n');
}
