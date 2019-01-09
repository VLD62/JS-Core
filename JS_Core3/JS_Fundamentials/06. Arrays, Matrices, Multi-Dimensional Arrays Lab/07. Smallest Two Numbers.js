function smallestTwoNumbers(arr) {
    console.log((arr.sort(function (a,b) {return a - b;}).splice(0,2).toString().split(",")));
}