function findVariableNamesInSentences(string) {
    let arr = string.match(/\b_([a-zA-Z0-9]+)\b/g);
    let arr2 = []
    for (let element of arr)  arr2.push(element.replace(/_/g,""));
    console.log(arr2.join(","))
}
findVariableNamesInSentences("__invalidVariable _evenMoreInvalidVariable_ _validVariable")