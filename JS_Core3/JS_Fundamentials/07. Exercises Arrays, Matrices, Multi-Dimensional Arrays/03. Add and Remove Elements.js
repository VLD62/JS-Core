function addRemoveElementsArray(commands) {
    let newArr = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].toLowerCase() != "remove") {
            newArr.push(i+1);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length < 1){
        return "Empty";
    } else {
        newArr.forEach((element) => {console.log(element);});
    }
}

(addRemoveElementsArray(["add", "add", "remove", "add", "add"]));