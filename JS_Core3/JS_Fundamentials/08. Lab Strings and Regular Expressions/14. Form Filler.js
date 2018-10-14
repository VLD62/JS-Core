function formFiller(name,email,phone,text) {
    let nameRegex = new RegExp(/<![a-zA-Z]+!>/);
    let mailRegex = new RegExp(/<@[a-zA-Z]+@>/);
    let phoneRegex = new RegExp(/<\+[a-zA-Z]+\+>/);
    for (element of text) {
        if ( match = nameRegex.exec(element)) {
            element = element.replace(nameRegex,name);
        }
        if (match = mailRegex.exec(element)) {
            element = element.replace(mailRegex,email);
        }
        if (match = phoneRegex.exec(element)) {
            element = element.replace(phoneRegex,phone);
        }
        console.log(element);
    }
}