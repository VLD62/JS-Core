//use arrow function as switch:

const limit = (area) => ({
    "motorway": 130,
    "interstate": 90,
    "city": 50,
    "residential": 20,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
})[area];

console.log(Math.floor(1001.8))

//Invoke funstions as variables:
let target = array[0];
let cut = (x) => x / 4;
let lap = (x) => x - (0.2*x) ;
let grind = (x) =>  x - 20;
let etch = (x) =>  x - 2;
let xRay = (x) => [x + 1 , console.log("X-ray x1")];
current = processing(current,cut, target,"Cut");
current = processing(current,lap, target,"Lap");
current = processing(current,grind, target,"Grind");
current = processing(current,etch, target,"Etch");
current = xRay(current)[0];

//IIFE
(() => {
    console.log((string.localeCompare(string.split("").reverse().join("")) === 0) ? "true" : "false")
})();

//Iterator
for…in to iterate over the index values of  array:
    for(var i in arr) {
        console.log("Property: " + i);
        console.log("Value: " + arr[i]);
    }
for…of to iterate over the values in array:

for (let animal of animals) {
  // Random name for our animal
    console.log(`${animal}`);
}

forEach - takes parameter as function:
dogs.forEach((item , index) => {
	console.log(item);
	console.log(index);
	});

////Splice vs Slice

The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

The splice() method changes the original array and slice() method doesn’t change the original array.

The splice() method can take n number of arguments and slice() method takes 2 arguments.

//Element by index step
function printNthElementArray(arr) {
    let step = arr.pop();
    arr.filter(function (el, index, arr) {
        if (index % step == 0) {
            console.log(el);
        }
    });
}

// Replacer
function censorship(text, array) {
    function placeholder(string) {
        return "-".repeat(string.length);
    }
    for (string of array) {
        let regex  = new RegExp(string, "g")
        text = text.replace(regex,placeholder(string));
    }
    return text;
}

//Regex Match words only
function matchAllWords(string) {
    return string.match(/\w+/g).join("|");
}
//Regex get value out of brackets
function extractText(string) {
    let result = [];
    let reg = new RegExp(/\((.*?)\)/,"g");
    while (match = reg.exec(string)) {
        result.push(match[1]);
    }
    console.log(result.join(", "));
}

function simpleMailValidaiton(email) {
    let regex = new RegExp(/\b[a-zA-Z0-9]+@[a-z]+.[a-z]+\b/,"g");
    let check = (text) => (regex.test(email) ? "Valid" : "Invalid");
    return check(email);
}

// Trim trailing and leading spaces regex
string.replace(/^\s+|\s+$/g, "");

//escape chars function

function escapeChars(str){
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
//group by KEY
let objArr = [];
for (let i = 0; i < array.length; i+=2) {
    let townObj = {}
    townObj['name'] = array[i];
    townObj['income'] = array[i+1];
    objArr.push(townObj);
}
//console.log(objArr);

let result = objArr.reduce((h, a) => Object.assign(h, { [a.name]:( h[a.name] || [] ).concat(a) }), {})
console.log(result)

//Only unique elements in array:
let uniq = element => [...new Set(element)];
console.log(uniq(wordArray));
//Sort Map by values:
let sortedMap = new Map([...wordMap].sort((a, b) => a[1] === b[1] ? 0 : a[1] > b[1] ? 1 : -1));

console.log(sortedMap)
///Sort Map
// For keys, we don't need an equals case, because identical keys overwrite
const sortStringKeys = (a, b) => a[0] > b[0] ? 1 : -1

// For values, we do need an equals case
const sortStringValues = (a, b) => a[1] === b[1] ? 0 : a[1] > b[1] ? 1 : -1

console.log('By keys:', new Map([...map].sort(sortStringKeys)))
console.log('By values:', new Map([...map].sort(sortStringValues)))
//Iterate thru Map:
Iterables for keys and values
keys() returns an iterable [3] over the keys in the map:

    for (let key of map.keys()) {
        console.log(key);
    }
// Output:
// false
// true
values() returns an iterable over the values in the map:

    for (let value of map.values()) {
        console.log(value);
    }
// Output:
// no
// yes
Iterables for entries
    entries() returns the entries of the map as an iterable over [key,value] pairs (arrays).

for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}
// Output:
// false no
// true yes
Destructuring enables you to access the keys and values directly:

    for (let [key, value] of map.entries()) {
        console.log(key, value);
    }