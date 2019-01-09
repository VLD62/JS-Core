function radioCrystals(array) {
    let target = array[0];
    let cut = (x) => x / 4;
    let lap = (x) => x - (0.2*x) ;
    let grind = (x) =>  x - 20;
    let etch = (x) =>  x - 2;
    let xRay = (x) => [x + 1 , console.log("X-ray x1")];
    function processing(current, operation, target, operationName) {
        let counter = 0;
                while (operation(current) >= target || current - target === 1) {
                    counter++
                    current = operation(current);
                }
                if (counter > 0) {
                    console.log(operationName + " x" + counter);
                    console.log("Transporting and washing")
                    return Math.floor(current);
                } else {
                   return current;
                }
    }
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        console.log("Processing chunk " + current + " microns");
        if (current < target){
            current = xRay(current)[0];

        } else {
                current = processing(current,cut, target,"Cut");
                current = processing(current,lap, target,"Lap");
                current = processing(current,grind, target,"Grind");
                current = processing(current,etch, target,"Etch");
                if (current + 1 == target) {
                current = xRay(current)[0];
                }
        }
        console.log("Finished crystal " + current + " microns");
    }
}

radioCrystals([1375, 50000])