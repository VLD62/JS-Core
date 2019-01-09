function aggregateTable(arr) {

    let sum = 0;
    let towns = [];
    arr.forEach(function(element) {
        towns.push((element.split("|")[1]).trim().split(/\s*,\s*/));
        sum +=(Number(element.split("|")[2]));

        }
    )
    console.log(towns.join(", "));
    console.log(sum);
}

aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'])