function palindrome(string) {
    (() => {
        console.log((string.localeCompare(string.split("").reverse().join("")) === 0) ? "true" : "false")
    })();
}