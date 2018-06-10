function palindrome(str) {

    console.log(checker(str, reverser(str)));

    function  reverser(str) {
        let rev = str.split("").reverse().join("");

        return rev;
    }

    function checker(str, rev) {
        if (str == rev) {
            return true;
        } else {
            return false;
        }
    }
}

palindrome("racecar");