function parseEmployeeData (array) {
    let regex = new RegExp(/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/);
    array.forEach(function (element) {
        if (match = regex.exec(element)) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    })
}

parseEmployeeData(['Isacc - 1000 - CEO','Ivan - 500 - Employee','Peter - 500 - Employee']);