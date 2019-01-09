function usernames(array) {

    let array4 = [];
    array.forEach(function(element) {
        let array2 = [];
        let array3 = [];
        array2 = (element.split("@"));
        array3 = array2[1].split(".");
        let domain = array3.map((domain) => domain[0]).join('')

        array4.push(array2[0] + "." + domain);
    })
    console.log(array4.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])