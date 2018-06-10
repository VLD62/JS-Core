function sortArrayBy2Criteria(array) {
    array.sort(function (a,b) {
        return a.length - b.length || a.localeCompare(b);

    })

    console.log(array.join('\r\n'));
}