function extractTheLinks(arr) {
    let regex = new RegExp(/(w{3})\.([A-Za-z0-9][A-Za-z0-9-]+)(\.[a-z]+)+/g)
    let newArr = [];

    for (let word of arr)  if (word.match(regex)) newArr.push(word.match(regex));

    for (let word of newArr) console.log(word[0])


}

extractTheLinks(["Need information about cheap hotels in London?","You can check us at www.london-hotels.co.uk!",
    "We provide the best services in London.","Here are some reviews in some blogs:",
    "London Hotels are awesome! - www.indigo.bloggers.com",
    "I am very satisfied with their services - ww.ivan.bg", "Best Hotel Services! - www.rebel21.sedecrem.moc",
    "Sentinel - www.sentinel.-ko"
 ])