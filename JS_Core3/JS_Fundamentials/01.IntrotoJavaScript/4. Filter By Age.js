function filterByAge(age, FirstName, FirstAge, SecondName, SecondAge) {
    let FirstPerson = {name: FirstName , age: FirstAge};
    let SecondPerson = {name: SecondName , age: SecondAge };
    let HumanArr = [FirstPerson , SecondPerson ];
    for (let i = 0; i < HumanArr.length; i++) {

        if (+HumanArr[i].age >= +age) {
            console.log(HumanArr[i]);
        }

    }
}
filterByAge(12, 'Ivan', 15, 'Asen', 9)
