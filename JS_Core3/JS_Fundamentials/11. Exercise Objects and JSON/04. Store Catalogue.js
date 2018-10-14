function storeCatalog(arrayOfStrings) {

    let upperCaseLetters = new Set
    let catalog = new Map
    for (const string of arrayOfStrings) {
        let [product, price] = string.split(' : ')
        catalog.set(product, price)
        let firstLetter = product[0].toUpperCase()

        if (!upperCaseLetters[firstLetter]) {
            upperCaseLetters.add(firstLetter)
        }
    }
    let sortedLetters = Array.from(upperCaseLetters.values()).sort()
    for (let letter of sortedLetters) {
        console.log(letter)
        for (const key  of [...catalog.keys()].sort()) {
            if (key[0] === letter) {
                console.log(`  ${key}: ${catalog.get(key)}`)
            }
        }
    }
}