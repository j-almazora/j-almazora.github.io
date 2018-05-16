var water = document.getElementById("water")
var banana = document.getElementById("banana")
var thin = document.getElementById("thin")
var solid = document.getElementById("solid")
var muddywater = document.getElementById("muddywater")
var cycle = document.getElementById("cycle")
var premium = document.getElementById("premium")
var disp = document.getElementById("display")
var man = document.getElementById("man");

function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
}

water.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Watery, no solid pieces, entirely liquid.They pass through in just ten hours (diarrhea). It happens because of stress or eating too much."
    playAudio();
});

banana.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Like a sausage or banana, smooth and soft. "
    playAudio();
});

thin.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Usually happens when female try to lose weight and abdominal muscle is weak. "
    playAudio();
});
solid.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Separate hard lumps, like nuts (hard to pass).It took around one hundred hours to pass through the system (constipation)."
    playAudio();
});
muddywater.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Like mud. It's close to diarrhea because water has not been completely absorbed yet. Over a long period of time, it might become IBS（Irritable Bowel Syndrome）."
    playAudio();
});
cycle.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "Because of pressure, solid and water poops came together. It is one of the Irritable Bowel Syndrome's symptom."
});
premium.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.innerHTML = "This kind of poop is soft with good shapes. It indicates that your body and spirit are all in optimal conditions."
    playAudio();
});

man.addEventListener("mouseover",function(){
    disp.style.display = "inline-block"
    disp.style.height = "auto"
    disp.innerHTML = "The Bristol stool scale was first published in 1997, so it is not very old if you consider the millions of years that feces have existed. The scale classifies the consistency of feces into seven groups. A chart like this can be a useful tool, since most people are reluctant to talk about the appearance of their bowel movements."
    playAudio();
});
