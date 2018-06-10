function Palindrome(str) {

    function StringReverser(str) {
        return str == str.split('').reverse().join('');
    }

    if (str = StringReverser(str)) {
        console.log("true")
    } else {
        console.log("false")
    }
}

Palindrome("aha")