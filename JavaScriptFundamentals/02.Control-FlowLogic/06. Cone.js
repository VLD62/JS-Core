function coneVolumeSurface (radius, height) {

    console.log("volume = " + Math.PI * radius * radius * height / 3);
    console.log("area = " + (Math.PI * radius * (radius + (Math.sqrt(height * height + radius * radius)))));
}

coneVolumeSurface(3,5)