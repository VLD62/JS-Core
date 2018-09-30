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