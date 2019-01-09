function capitalizeWords(string) {
    return string.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1,string.length).toLowerCase()).join(" ");
}

console.log(capitalizeWords('Capitalize these words'));