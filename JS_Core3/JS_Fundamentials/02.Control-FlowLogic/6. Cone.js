function cone(r,h) {
    console.log("volume = " + (Math.PI*Math.pow(r,2)*h)/3);
    console.log("area = " + (Math.PI*r*(r+Math.sqrt(r*r+h*h))));
}
cone(3,5)