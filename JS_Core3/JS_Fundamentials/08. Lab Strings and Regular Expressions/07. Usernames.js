function usernames(string) {
    let array = [];
    for (email of string) {
        let tempArray = email.split("@");
        let tempArray1 = tempArray[1].split(".");
        array.push(tempArray[0] + "." + tempArray1.map((x) => x[0]).join(''));
    }
    return (array.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])