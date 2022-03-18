var i = 0;
var j = 0;
var txt = ['KEBERSIHAN','KECANTIKAN','KESELAMATAN','SMART','SUSTAINABLE']; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var delspeed = 15;
var text = '';

function typeWriter(){
    text = txt[j];
    var timeout = (speed+delspeed)*(text.length-1) + 3000;
    typeText();
    setTimeout(deleteText,3000);
    j++;
    if(j == txt.length){
        j = 0;
    }
    setTimeout(typeWriter,timeout);
}

function typeText(){
    if (i < text.length){
        document.getElementById("demo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

function deleteText(){
    if(i > 0){
        var word = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = word.substring(0, word.length-1);
        i--;
        setTimeout(deleteText, delspeed);
    }
}

