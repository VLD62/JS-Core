function travelTime(array) {
    let destinations = [];
    let destinationsLast = [];
    array.forEach(function (element) {
        let elements = element.split(">");
        let destination = {
            country: elements[0].trim(),
            town: capitalizeFirstLetter(elements[1].trim()),
            cost: Number(elements[2])

        }
        destinations.push(destination);
    })


    function compareCountry(a,b) {
        if (a.country < b.country)
            return -1;
        if (a.country > b.country)
            return 1;
        return 0;
    }

    destinations = destinations.sort(compareCountry);

    //console.log(destinations);

    destinations.forEach(function (element) {

            console.log(element.country + ' -> ' + element.town + ' -> ' + element.cost);

    })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

}
travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
)