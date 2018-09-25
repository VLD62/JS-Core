function minkeDecode(array) {
    let numbers = [];
    let city = "";
    let country  = array[3].match(/[A-ZÖ][a-zö]+[A-ZÖ]/g)[0].toString();
    country =  country.substring(0, Number(array[0])) +
        array[2] +
        country.substring(Number(array[1])+1, country.length);

    //country = (country.charAt(0).toUpperCase() + country.substr(1).toLowerCase())
    let regex = new RegExp(/([0-9]{3}\.[0-9]+)|([0-9]{3}\b)/g);
    while ( match = regex.exec(array[3].toString())) {
        numbers.push(match[0]);
    }
    numbers.forEach(function (element) {

        city += String.fromCharCode(Math.ceil(Number(element)));
    })

    //city = (city.charAt(0).toUpperCase() + city.substr(1).toLowerCase())

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    console.log(capitalizeFirstLetter(country) + " => " + capitalizeFirstLetter(city))
}
minkeDecode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])

//minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])