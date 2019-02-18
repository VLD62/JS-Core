function solve(name, age, weight, height ) {
    function calcBMI(weight,height) {
        let bmi = Math.round(weight/Math.pow((height*0.01),2));
        if (bmi < 18.5) {
            return [bmi,"underweight"];
        } else if (bmi >= 18.5 && bmi < 25) {
            return [bmi,"normal"];
        } else if (bmi >= 25 && bmi < 30) {
            return [bmi,"overweight"];
        } else {
            return [bmi,"obese"];
        }
    }
    let personDetails = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
          }
        ,
        BMI: calcBMI(weight,height)[0],
        status: calcBMI(weight,height)[1],
    };
    if (personDetails.status == "obese" ) {
        personDetails['recommendation'] = 'admission required';
    }

    return personDetails;
}
console.log(solve('Honey Boo Boo', 9, 57, 137))