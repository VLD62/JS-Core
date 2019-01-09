function tripLength(arrNum) {
    function calculateDistance(x1,y1,x2,y2) {
        return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
    }
    function disanceShort(distance1,distance2) {
        if ((distance1.label == 13 && distance2.label == 12)
            || (distance1.label == 12 && distance2.label == 13) ){
            finalDistance = distance1.value + distance2.value;
            return "2->1->3";
        } else if ((distance1.label == 12 && distance2.label == 23)
            || (distance1.label == 23 && distance2.label == 12)){
            finalDistance = distance1.value + distance2.value;
            return "1->2->3";
        } else {
            finalDistance = distance1.value + distance2.value;
            return "1->3->2";
        }
    }
    let ab = {label : 12, value : calculateDistance(arrNum[0],arrNum[1],arrNum[2],arrNum[3])};
    let bc = {label : 23, value : calculateDistance(arrNum[2],arrNum[3],arrNum[4],arrNum[5])};
    let ac = {label : 13,  value : calculateDistance(arrNum[0],arrNum[1],arrNum[4],arrNum[5])};
    let finalDistance = 0;
    let distanceArr = [ab, bc, ac];
    distanceArr.sort((a,b) => (a.value > b.value) ? 1 : (( a.value < b.value) ? -1 : 0));
    return disanceShort(distanceArr[0],distanceArr[1]) +": " + finalDistance;
}
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]))