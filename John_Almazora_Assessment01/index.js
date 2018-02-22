var controls = document.getElementById("controls");

var ch1 = document.getElementById("ch1");

var ch2 = document.getElementById("ch2");

var ch3 = document.getElementById("ch3");

var bg = document.getElementById("bg");

var bg1 = document.getElementById("bg1");

var bg2 = document.getElementById("bg2");

var bg3 = document.getElementById("bg3");

var bg4 = document.getElementById("bg4");

var prev = document.getElementById("previous");

var next = document.getElementById("next");

var app1 = document.getElementById("app1");

var zoom = document.getElementById("zoom");

var zoomIn = document.getElementById("zoomIn");

var zoomOut = document.getElementById("zoomOut");

var zoomControls = document.getElementById("zoomControls");



//VAR MENU

var makeBg = document.getElementById("makeBg");

var reset = document.getElementById("reset");

var hideApp = document.getElementById("hideApp");

var showApp = document.getElementById("showApp");


//CONTROLS




bg1.addEventListener("click", function () {
    ch1.style.backgroundImage = "url('imgs/i1.jpg')";
    ch2.style.backgroundImage = "url('imgs/i2.jpg')";
    ch3.style.backgroundImage = "url('imgs/i3.jpg')";
});

bg2.addEventListener("click", function () {
    ch1.style.backgroundImage = "url('imgs/i4.jpg')";
    ch2.style.backgroundImage = "url('imgs/i5.jpg')";
    ch3.style.backgroundImage = "url('imgs/i6.jpg')";
});

bg3.addEventListener("click", function () {
    ch1.style.backgroundImage = "url('imgs/i7.jpg')";
    ch2.style.backgroundImage = "url('imgs/i8.jpg')";
    ch3.style.backgroundImage = "url('imgs/i9.jpg')";
});

bg4.addEventListener("click", function () {
    ch1.style.backgroundImage = "url('imgs/i10.jpg')";
    ch2.style.backgroundImage = "url('imgs/i11.jpg')";
    ch3.style.backgroundImage = "url('imgs/i12.jpg')";
});



//MOUSEENTER

ch1.addEventListener("mouseenter", function(){
	zoom.style.backgroundImage = ch1.style.backgroundImage;
});


ch2.addEventListener("mouseenter", function () {
    document.getElementById("zoom").style.backgroundImage = ch2.style.backgroundImage;
});


ch3.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = ch3.style.backgroundImage;
});



//MENU CONTROLS


makeBg.addEventListener("click", function(){

bg.style.backgroundImage = zoom.style.backgroundImage
});
reset.addEventListener("click", function(){
bg.style.display = "none";
});
hideApp.addEventListener("click", function(){
	app1.style.display = "none";
});
showApp.addEventListener("click", function(){
	app1.style.display = "block";
});	


//ZOOM IN & ZOOM OUT


zoom.addEventListener("click",function(){
    zoomControls.style.display = "block";
});


var x = 100;
var y = 70;
var xPlus = 10;
var yPlus = 7;

zoomIn.addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
            x += xPlus; 
            y += yPlus;
           
       } else if (x > 11 || y > 8 ) {
           
       }
       zoom.style.width= x + "%";
       zoom.style.height= y + "%";                                

});

zoomOut.addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
           
           
       } else if (x > 11 || y > 8 ) {
            x -= xPlus; 
            y -= yPlus;
           
       }
       document.getElementById("zoom").style.width= x + "%";
       document.getElementById("zoom").style.height= y + "%";

});






//NEXT & PREVIOUS


document.getElementById("previous").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")'; 
    }
        
});


document.getElementById("next").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")'; 
    }
        
});



