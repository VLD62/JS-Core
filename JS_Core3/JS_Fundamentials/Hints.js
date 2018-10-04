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