function travelInvestigaiton (array) {

    let company = array[0];
    array.shift();
    let delimiter = array[0].trim();
    array.shift();
    let validArray = [];
    let invalidArray = [];
    let companyArray = company.split(delimiter);
    array = array.map(function(x){ return x.toLowerCase() })
    for (let  i = 0; i < array.length; i++) {
        let match = true;
        companyArray.forEach(function (element) {
           let regex = new RegExp(element.trim())
            if (!regex.test(array[i])) {
                match = false;
            }
        })
        if (match) {
            validArray.push(array[i])
        } else {
            invalidArray.push(array[i]);
        }
    }
    if (validArray.length > 0) {
        console.log('ValidSentences');
        for (let i = 0; i < validArray.length; i++) {
            console.log(i+1 +". " +validArray[i]);

        }
        if (invalidArray.length > 0) {
            console.log('==============================');
            console.log('InvalidSentences');
            for (let i = 0; i < invalidArray.length; i++) {
                console.log(i+1 +". " +invalidArray[i]);

            }
        }
    } else {
        if (invalidArray.length > 0) {
            console.log('InvalidSentences');
            for (let i = 0; i < invalidArray.length; i++) {
                console.log(i+1 +". " +invalidArray[i]);

            }
        }
    }
}

travelInvestigaiton(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]

)