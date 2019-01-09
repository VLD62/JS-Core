function travelPlans (array){
    let totalGold  = 0
    let specializedCounter = 0;
    let averageCounter = 0;
    let clumsyCounter = 0;
    for (let i = 0; i < array.length; i++) {
        arr2 = array[i].split(":");
        switch (arr2[0].trim()) {
            case "Programming":
            case "Hardware maintenance":
            case "Cooking":
            case "Translating":
            case "Designing":
                specializedCounter++;
                if (Number(arr2[1]) >= 200 )  {
                    totalGold += 0.8*Number(arr2[1]);
                    if (specializedCounter % 2 == 0) {
                        totalGold += 200;
                        specializedCounter = 0;
                    }

                }
                break;
            case "Driving":
            case "Managing":
            case "Fishing":
            case "Gardening":
                averageCounter++;
                totalGold += Number(arr2[1]);
                break;
            case "Singing":
            case "Accounting":
            case "Teaching":
            case "Exam-Making":
            case "Acting":
            case "Writing":
            case "Lecturing":
            case "Modeling":
            case "Nursing":
                clumsyCounter++;
                if (clumsyCounter % 2 == 0) {
                    totalGold +=0.95*Number(arr2[1]);
                } else if (clumsyCounter % 3 == 0) {
                    totalGold += 0.9*Number(arr2[1])
                    clumsyCounter = 0;
                } else {
                    totalGold += Number(arr2[1]);
                }
                break;
            default:
                break;
        }
    }

    console.log('Final sum: '+ totalGold.toFixed(2));
    if (totalGold <= 1000) {
        console.log('Mariyka need to earn ' + (1000 - totalGold).toFixed(2)   + ' gold more to continue in the next task.')
    } else {
        console.log('Mariyka earned ' + (totalGold - 1000).toFixed(2)  + ' gold more.')
    }
}
//travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])