function employeeData(array) {
    let regex = new RegExp(/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/);
    for (element of array) {
        if ( match = regex.exec(element)) {
            console.log((`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`));;
        }
    }
}