function capitalizeWords(string) {
    let arr = string.split(" ");
    let newStr="";
    for (var i = 0; i < arr.length; i++) {

        newStr += arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1)+" ";
    }
    console.log(newStr)
}

capitalizeWords("Was that Easy? tRY thIs onE for SiZe!")