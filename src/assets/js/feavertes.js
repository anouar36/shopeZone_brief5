var slider_img = document.querySelector(".slider-img");
var imges = ['slider (2).jpg','slider (3).jpg', 'slider.jpg']
var i= 0 ;
function prev() {
    if (i <= 0) i = imges.length;
    i--;

return setimge();
}

function next() {
    if (i >= imges.length - 1) i = -1 ;
  i++;

return setimge();
}
    
function setimge(){
return slider_img.setAttribute('src', '/src/assets/images/'+ imges[i]);
}