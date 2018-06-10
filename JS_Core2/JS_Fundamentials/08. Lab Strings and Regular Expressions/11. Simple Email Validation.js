function simpleEmailCheck(string) {
    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;

    if (regex.test(string)) {
        console.log("Valid");
    }
    else {
        console.log("Invalid");
    }
}
simpleEmailCheck('valid@em2ail.bg')