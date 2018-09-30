function radioCrystals(array) {
    let target = array[0];
    let chunk = 0;
    let cutCount = 0
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    let xRayCount = 0;

    function processing (x) {

        let cut = (x) => x / 4;
        let lap = (x) => x - (0.2*x) ;
        let grind = (x) =>  x - 20;
        let etch = (x) =>  x - 2;
        let xRay = (x) => x + 1;
        if (target < chunk) {
                while (target < chunk) {
                    if (cut(chunk) >= target) {
                        cutCount++;
                        chunk = cut(chunk);
                    } else if (lap(chunk) >= target) {
                        if (lapCount === 0) {
                            chunk = Math.floor(chunk);
                        }
                        lapCount++;
                        chunk = lap(chunk);
                    } else if (grind(chunk) >= target) {
                        if (grindCount === 0) {
                            chunk = Math.floor(chunk);
                        }
                        grindCount++;
                        chunk = grind(chunk)
                    } else if (etch(chunk) >= target) {
                        if (etchCount === 0) {
                            chunk = Math.floor(chunk);
                        }
                        etchCount++;
                        chunk = etch(chunk);
                    } else {
                        chunk = Math.floor(chunk);
                        if (xRayCount == 0) {
                            xRayCount = 1;
                            chunk = xRay(chunk);
                        }
                    }

                }
            } else {
            xRayCount = 1;
            chunk = xRay(chunk);
        }
    }
    for (let i = 1; i < array.length; i++) {
        chunk = array[i];
        console.log("Processing chunk " + array[i] +" microns");
        processing(chunk);
        if (cutCount > 0)   {console.log("Cut x"+ cutCount +"\n" +
        "Transporting and washing")};
        if (lapCount > 0)   {console.log("Lap x"+ lapCount +"\n" +
        "Transporting and washing")};
        if (grindCount > 0) {console.log("Grind x"+ grindCount +"\n" +
        "Transporting and washing")};
        if (etchCount > 0)  {console.log("Etch x"+ etchCount +"\n" +
        "Transporting and washing")};
        if (xRayCount > 0)  {console.log("X-ray x"+ xRayCount)};
        console.log("Finished crystal " + chunk + " microns");
        cutCount = 0;
        lapCount = 0;
        grindCount = 0;
        etchCount = 0;
        xRayCount = 0;
    }
}
radioCrystals([100, 99])