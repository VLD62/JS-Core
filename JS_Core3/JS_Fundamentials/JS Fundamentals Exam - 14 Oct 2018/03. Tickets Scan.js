function ticketsScan(string,command) {
    let nameRegex = new RegExp(/\s[A-Z]{1}[a-zA-Z]*\-[A-Z]{1}[a-zA-Z]*(\.\-[A-Z]{1}[a-zA-Z]*)?\s/);
    let airportRegex = new RegExp(/\s[A-Z]{3}\/[A-Z]{3}\s/);
    let flightRegex = new RegExp(/\s[A-Z]{1,3}[0-9]{1,5}\s/);
    let companyRegex = new RegExp(/\-\s[A-Z]{1}[a-zA-Z]*\*[A-Z]{1}[a-zA-Z]*\s/)
    if (command == "name") {
        let name = string.match(nameRegex)[0].replace(/^\s+|\s+$/g, "").replace(/-/g," ");
        return `Mr/Ms, ${name}, have a nice flight!`
    }
    if (command == "flight") {
        let airport = string.match(airportRegex)[0].split("/");
        let fromAirport = airport[0].substr(1);
        let toAirport = airport[1].replace(/^\s+|\s+$/g, "");
        let flightNumber = string.match(flightRegex)[0].replace(/^\s+|\s+$/g, "");
        return `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`
    }
    if (command == "company") {
        let companyName = string.match(companyRegex)[0].substr(1).replace(/^\s+|\s+$/g, "").replace("*"," ");
        return `Have a nice flight with ${companyName}.`
    }
    if (command == "all") {
        let name = string.match(nameRegex)[0].replace(/^\s+|\s+$/g, "").replace(/-/g," ");
        let airport = string.match(airportRegex)[0].split("/");
        let fromAirport = airport[0].substr(1);
        let toAirport = airport[1].replace(/^\s+|\s+$/g, "");
        let flightNumber = string.match(flightRegex)[0].replace(/^\s+|\s+$/g, "");
        let companyName = string.match(companyRegex)[0].substr(1).replace(/^\s+|\s+$/g, "").replace("*"," ");
        return `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`
    }
}


console.log(ticketsScan('ahah Second-Testov.-Koza )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'name'));