function townsToJSON(array) {
    let header = array[0].split("|");
    let towns = [];
    array.shift();
    array.forEach(function (element) {
        let elements = element.split("|");
        let town = {
            [header[1].replace(/\s/g, "")]: elements[1].trim(),
            [header[2].replace(/\s/g, "")]: Number(elements[2]),
            [header[3].replace(/\s/g, "")]: Number(elements[3])

        }
        towns.push(JSON.stringify(town));
    })
}
