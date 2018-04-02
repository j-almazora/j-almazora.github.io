var color = document.getElementById("color"),
    hairR = document.getElementById("hairR"),
    eyesR = document.getElementById("eyesR"),
    noseR = document.getElementById("noseR"),
    mouthR = document.getElementById("mouthR"),
    hair = document.getElementById("hair"), 
    eyes = document.getElementById("eyes"), 
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

var dispDiv = document.getElementById("display");

var imgNum = 1;


//BG COLOR CHANGE


color.addEventListener("change", function () {
    document.getElementById("preview").style.backgroundColor = color.value;
});


//WIDTH CHANGE


hairR.addEventListener("change", function () {
    hair.style.width = hairR.value + "%";
});

eyesR.addEventListener("change", function () {
    eyes.style.width = eyesR.value + "%";
});

noseR.addEventListener("change", function () {
    nose.style.width = noseR.value + "%";
});

mouthR.addEventListener("change", function () {
    mouth.style.width = mouthR.value + "%";
});


//CHANGE PREVIEW DISPLAY


hair.addEventListener("click", function () {
    imgNum += 1;
    if (imgNum >= 4) {
        imgNum = 1;
    }
    
    hair.src = "img/hair"+imgNum+".png";
});


eyes.addEventListener("click", function () {
   imgNum += 1;
    if (imgNum >= 4) {
        imgNum = 1;
    }
    
    eyes.src = "img/eyes"+imgNum+".png";
});

nose.addEventListener("click", function () {
   imgNum += 1;
    if (imgNum >= 4) {
        imgNum = 1;
    }
    
    nose.src = "img/nose"+imgNum+".png";
});

mouth.addEventListener("click", function () {
   imgNum += 1;
    if (imgNum >= 4) {
        imgNum = 1;
    }
    
    mouth.src = "img/mouth"+imgNum+".png";
});



//CREATE ELEMENTS



function makeFace() {
    var newDiv = document.createElement("div");
    
    newDiv.className = "newDiv";
    dispDiv.appendChild(newDiv);
    
    var hairImg = document.createElement("img");

    hairImg.className = "newImg";
    
    hairImg.src = hair.src;
    hairImg.style.width = hair.style.width;
    newDiv.appendChild(hairImg);
    
    
    var eyesImg = document.createElement("img");

    eyesImg.className = "newImg";
    
    eyesImg.src = eyes.src;
    eyesImg.style.width = eyes.style.width;
    newDiv.appendChild(eyesImg);
    
    
    
    var noseImg = document.createElement("img");

    noseImg.className = "newImg";
    
    noseImg.src = nose.src;
    noseImg.style.width = nose.style.width;
    newDiv.appendChild(noseImg);
    
    
    
    var mouthImg = document.createElement("img");

    mouthImg.className = "newImg";
    
    mouthImg.src = mouth.src;
    mouthImg.style.width = mouth.style.width;
    newDiv.appendChild(mouthImg);
    
    newDiv.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
};


document.getElementById("plusButton").addEventListener("click", function () {
      makeFace();
});


//RANDOM STUFF


function randomFace() {
     hair.src = "img/hair"+Math.floor(Math.random()*3+1)+".png";
    eyes.src = "img/eyes"+Math.floor(Math.random()*3+1)+".png";
    nose.src = "img/nose"+Math.floor(Math.random()*3+1)+".png";
    mouth.src = "img/mouth"+Math.floor(Math.random()*3+1)+".png";
    
};

function randomRange (){
    
     var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);
    
    hair.style.width = Math.floor(Math.random()*70+1) + "%";
    
    eyes.style.width = Math.floor(Math.random()*40+1) + "%";
    
    nose.style.width = Math.floor(Math.random()*30+1) + "%";
    
    mouth.style.width = Math.floor(Math.random()*35+1) + "%";
    
    document.getElementById("preview").style.backgroundColor = "rgb("+r+","+g+","+b+")";
};

document.getElementById("randomButton").addEventListener("click", function () {
   randomFace(),
       randomRange();
});


//CHANGING TYPE BETWEEN RANGE & NUMBER


function changeType(type) {
    hairR.type = type;
    eyesR.type = type;
    noseR.type = type;
    mouthR. type = type;
};

document.getElementById("numberButton").addEventListener("click", function () {
changeType("number");
});

document.getElementById("rangeButton").addEventListener("click", function () {
   changeType("range");
});


//INTERVAL CREATING

var timer = null;

document.getElementById("autoRandom").addEventListener("click", function () {
   timer = setInterval(function(){
        randomFace(), randomRange(), makeFace();
   },1000);
});

document.getElementById("autoStop").addEventListener("click", function () {
    clearInterval(timer);
});


//REMOVING DIV ON CLICK


