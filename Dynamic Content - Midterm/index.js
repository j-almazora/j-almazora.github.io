//SNOW ANIMATION
var dispDiv = document.getElementById("display");


function makeItSnow() {
    var snow = document.createElement("img");

    var mleft = Math.round(Math.random() * 100);

    var mdim = Math.round(Math.random() * 30) + 5;

    snow.style.left = mleft + "%";

    snow.style.width = mdim + "px";
    snow.style.height = mdim + "px";


    snow.src = "./img/snow.svg";
    snow.className = "snows";
    dispDiv.appendChild(snow);

    if (mdim > 30) {
        snow.style.transition = "top 5s";
        snow.style.opacity = "0.9";
    } else if (mdim > 20) {
        snow.style.transition = "top 6s";
        snow.style.opacity = "0.7";
    } else if (mdim > 10) {
        snow.style.transition = "top 7s";
        snow.style.opacity = "0.5";
    } else {
        snow.style.transition = "top 8s";
        snow.style.opacity = "0.3";
    }

    setTimeout(function () {
        snow.style.top = "150%";
        setTimeout(function () {
            dispDiv.removeChild(snow);
        }, 10000);
    }, 10);
};

function make10snow() {
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
};

var timer = null;

document.getElementById("bgGraphics").addEventListener("click", function () {
    timer = setInterval(make10snow, 300);
});

document.getElementById("textBubble").addEventListener("click", function () {
    clearInterval(timer);
});

//document.getElementById("freq").addEventListener("change", function () {
//    clearInterval(timer);
//    var mnum = document.getElementById("freq").value;
//
//    var spd = 1000 - mnum;
//    mnum = parseInt(mnum) * 100
//    timer = setInterval(make10snow, mnum * 100);
//});

//SNOW ANIMATION END

//CLOUD ANIMATION

var cloud1 = document.getElementById("cloud1_1_");

var cloud2 = document.getElementById("cloud2_1_");

var cloud3 = document.getElementById("cloud3_1_");

var cloud4 = document.getElementById("cloud4_1_");

var cloud5 = document.getElementById("cloud5");

var cloud6 = document.getElementById("cloud6");


function moveCloud() {
    cloud1.style.animation = "moveCloud1 5s infinite";
    cloud2.style.animation = "moveCloud2 4s infinite";
    cloud3.style.animation = "moveCloud1 4.6s infinite";
    cloud4.style.animation = "moveCloud2 3.5s infinite";
    cloud5.style.animation = "moveCloud1 5s infinite";
    cloud6.style.animation = "moveCloud2 3.3s infinite";

    cloud1.style.animationDirection = "alternate";
    cloud2.style.animationDirection = "alternate";
    cloud3.style.animationDirection = "alternate";
    cloud4.style.animationDirection = "alternate";
    cloud5.style.animationDirection = "alternate";
    cloud6.style.animationDirection = "alternate";
};

cloud1.addEventListener("click", function () {
   moveCloud(); 
});

cloud2.addEventListener("click", function () {
   moveCloud(); 
});

cloud3.addEventListener("click", function () {
   moveCloud(); 
});

cloud4.addEventListener("click", function () {
   moveCloud(); 
});

cloud5.addEventListener("click", function () {
   moveCloud(); 
});

cloud6.addEventListener("click", function () {
   moveCloud(); 
});

//CLOUD ANIMATION END

//DAY TO NIGHT ANIMATION

var sun = document.getElementById("sun_2_");

var moon = document.getElementById("moon_1_");

var cityLights = document.getElementById("cityLights");


sun.addEventListener("click", function () {
   sun.style.transform = "translate(150px, -400px)"; 
    
    moon.style.transform = "translate(0px, 0px)";
    moon.style.animation = "dOpacity 3s";
    dispDiv.style.backgroundColor = "#1B302F";
   
    cityLights.style.display = "block";
    cityLights.style.animation = "dOpacity 3s";
});

//NIGHT TO DAY

moon.addEventListener("click", function () {
    dispDiv.style.backgroundColor = "#106088";
     sun.style.transform = "translate(150px, 15px)";
    sun.style.animation = "dOpacity 3s";
    moon.style.transform = "translate(0px, -400px)";
    cityLights.style.display = "none";
});



//CRUD METHOD OF SHOWING FACTS (I WAS PLANNING ON MAKING A DIV FOR EVERYFACT)

//function divFact() {
//
//var textbubble = document.createElement("div");
//textbubble.id = "textBubble";
//    
//var pBubble = document.createElement("p");
//pBubble.id = "greeting";
//    
//    
//document.getElementById("greeting").appendChild(textbubble);
//    
//    document.getElementById("textBubble").appendChild(pBubble);
//    
//    };

//snowman.addEventListener("click", function () {
//divFact();
//     document.getElementById("greeting").innerHTML = "In Zurich, Switzerland, people celebrate the start of spring by blowing up a snowman. This holiday is known as Sechseläuten.";
//    
//    tBubble.style.opacity = "1";
//    
//});


//FACTS

var santa = document.getElementById("santa");

var tBubble = document.getElementById("textBubble");

var greeting = document.getElementById("greeting");

var snowman = document.getElementById("snowman");

var rudolf = document.getElementById("rudolf");

var gifts = document.getElementById("gifts");

var xTree = document.getElementById("xTree");

var hat = document.getElementById("hat_1_");

var opening = document.getElementById("opening");

var coke = document.getElementById("coke");

var decor = document.getElementById("decor");

santa.addEventListener("click", function (){
   document.getElementById("greeting").innerHTML = "Santa wore a variety of colorful suits through the years, but legend has it that the popular image of his red coat came from a 1930s ad by Coca Cola." 
    
    tBubble.style.opacity = "1";
    
    coke.style.transform = "translate(0px, 800px)";
    
});

snowman.addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "In Zurich, Switzerland, people celebrate the start of spring by blowing up a snowman. This holiday is known as Sechseläuten."; 
    
    tBubble.style.opacity = "1";
    
    snowman.style.opacity = "0";
    
    hat.style.transform = "translate(0px, 100px)";
});


rudolf.addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Rudolph was almost named Reginald or Rollo. However, Rollo was rejected for sounding too sunny and happy; Reginald sounded too British."; 
    
    tBubble.style.opacity = "1";
});

gifts.addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "For centuries, there has been some form of gift-giving throughout the Advent season, but for most people these were traditionally small, homemade or edible — such as needlework, wooden toys or baked goods — and played nowhere near as big a role as they do in the modern Christmas."; 
    
    tBubble.style.opacity = "1";
});

xTree.addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Thomas Edison’s assistant, Edward Johnson, came up with the idea of electric lights for Christmas trees in 1882. Christmas tree lights were first mass-produced in 1890."; 
    
    tBubble.style.opacity = "1";
    
    decor.style.opacity = "1";
});

document.getElementById("bgGraphics").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Many don’t realise that snow is not white – it is clear and colourless. It is white due to the little sunlight the snow absorbs, giving its white appearance."; 
    
    tBubble.style.opacity = "1";
});

cityLights.addEventListener("click", function (){
    document.getElementById("greeting").innerHTML = "Santa's sleigh has to move 650 miles per hour. This is to say that for each Christian household with good children, Santa has 1/1000th of a second to park, hop out of the sleigh, jump down the chimney, fill the stockings, distribute the remaining presents under the tree, eat whatever snacks have been left, get back up the chimney, get back into the sleigh and move on to the next house."; 
    
    tBubble.style.opacity = "1";

});

hat.addEventListener("click", function (){
    document.getElementById("greeting").innerHTML = "Brunei is the only country that prohibits people from joining the traditional Christian celebration and that wearing hats or clothes that resemble Santa Claus would be considered a criminal offense."; 
    
    tBubble.style.opacity = "1";
});

opening.addEventListener("click", function () {
   opening.style.display = "none";
});

coke.addEventListener("click", function (){
    document.getElementById("greeting").innerHTML = "Santa Has Been Featured in Coke Ads Since the 1920s"; 
    
    tBubble.style.opacity = "1";
});


//HIDING FACTS

tBubble.addEventListener("click", function () {
   tBubble.style.opacity = "0"; 
});
