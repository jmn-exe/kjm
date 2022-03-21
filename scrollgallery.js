var iconCount = 1;
var maxIcon = 6 - 3;
function iconScroll(){
    var gallery = document.getElementById("activity-gallery").style;
    var translate = iconCount * (-150);
    gallery.left =  translate + 'px';
    iconCount++;
    if(iconCount == maxIcon){
        iconCount = 0;
    }
    setTimeout(iconScroll,3000);
}