function figureArea(w, h, W,  H) {
 console.log(w*h + W*H - (Math.min(w,W)*Math.min(h,H)));
}
figureArea(13, 2, 5, 8);