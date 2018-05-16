var blueberry = document.getElementById("blueberry"),
    yogurt = document.getElementById("yogurt"),
    wholeGrain = document.getElementById("wholeGrain"),
    meat = document.getElementById("meat"),
    egg = document.getElementById("poultry"),
    banana = document.getElementById("banana"),
    healthyDiet = document.getElementById("balancedDiet");

var blueberryIcon = document.getElementById("blueberryIcon"),
    yogurtIcon = document.getElementById("yogurtIcon"),
    wholeGrainIcon = document.getElementById("wholeGrainIcon"),
    meatIcon = document.getElementById("meatIcon"),
    eggIcon = document.getElementById("eggIcon"),
    bananaIcon = document.getElementById("bananaIcon");


function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
};


blueberryIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    blueberry.style.display = "block";
    
    if (blueberry.style.display == "block") {
        wholeGrain.style.display = "none";
        yogurt.style.display = "none";
        meat.style.display = "none";
        egg.style.display = "none";
        banana.style.display = "none";
    }
    
    playAudio();
});

yogurtIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    yogurt.style.display = "block";
    
    if (yogurt.style.display == "block") {
        wholeGrain.style.display = "none";
        blueberry.style.display = "none";
        meat.style.display = "none";
        egg.style.display = "none";
        banana.style.display = "none";
    }
        playAudio();
});

wholeGrainIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    wholeGrain.style.display = "block";
    
    if (wholeGrain.style.display == "block") {
        blueberry.style.display = "none";
        yogurt.style.display = "none";
        meat.style.display = "none";
        egg.style.display = "none";
        banana.style.display = "none";
    }
        playAudio();
});

meatIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    meat.style.display = "block";
    
    if (meat.style.display == "block") {
        wholeGrain.style.display = "none";
        yogurt.style.display = "none";
        blueberry.style.display = "none";
        egg.style.display = "none";
        banana.style.display = "none";
    }
        playAudio();
});

eggIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    egg.style.display = "block";
    
    if (egg.style.display == "block") {
        wholeGrain.style.display = "none";
        yogurt.style.display = "none";
        meat.style.display = "none";
        blueberry.style.display = "none";
        banana.style.display = "none";
    }
        playAudio();
});

bananaIcon.addEventListener("click", function () {
    healthyDiet.style.display = "none";
    
    banana.style.display = "block";
    
    if (banana.style.display == "block") {
        wholeGrain.style.display = "none";
        yogurt.style.display = "none";
        meat.style.display = "none";
        egg.style.display = "none";
        blueberry.style.display = "none";
    }
        playAudio();
});

