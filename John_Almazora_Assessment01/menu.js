var menu = document.getElementById("menu");

var open = document.getElementById("openButton");

var close = document.getElementById("closeButton");




open.addEventListener("click",function(){
    menu.style.left = "0px";
});

close.addEventListener("click",function(){
    menu.style.left = "-110px";
});

//IT DOESN'T EXIST / ALERT / STEPPER

document.getElementById("bgNum").addEventListener("change", function () {
    var currentNum = parseInt(bgNum.value);
    
    if(currentNum > 12 || currentNum < 1) {
        alert ("Doesn't exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(imgs/i"+currentNum+".jpg)";
    }
    
});