function townsToJSON(array) {
    let objArray = [];
    for (let i = 1; i < array.length; i++) {
        let townObject = {};
        array[i].split("|").filter(x => x).forEach( function(town, index) {
            if (index > 0) {
            townObject[array[0].split("|").filter(x => x)[index].split(' ').join('')] = +town;
            } else {
            townObject[array[0].split("|").filter(x => x)[index].split(' ').join('')] = town.replace(/^\s+|\s+$/g, "");
            }
        })
        objArray.push(JSON.stringify(townObject));
    }
    console.log("[" + objArray.join(",") + "]");
}

//townsToJSON(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])