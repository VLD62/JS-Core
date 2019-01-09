function distance3D (array) {
    console.log(Math.sqrt(Math.pow((array[0]-array[3]),2) + Math.pow((array[1]-array[4]),2)
        + Math.pow((array[2]-array[5]),2)))
}
distance3D([3.5, 0, 1, 0, 2, -1])