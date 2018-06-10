function captureNumbers (arr) {
    let regEx = new RegExp(/\d+/g)
    newArr = "";
    for (var i = 0; i < arr.length; i++) {
        let kombi = arr[i].match(regEx);
        //console.log(kombi);
        if (kombi != null) {
            newArr+= kombi+ " "
        }


    }
    console.log(newArr.split(',').join(' '))
}
captureNumbers(["The300","What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"])