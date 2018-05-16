var display = document.getElementById("display"),
    factDisplay = document.getElementById("factDisplay"),
    dykHead = document.getElementById("dykHead"),
    factText = document.getElementById("factText");

//svg icons for poopFact.html page

var berryIcon = document.getElementById("berryIcon"),
    beansIcon = document.getElementById("beansIcon"),
    edamameIcon = document.getElementById("edamameIcon"),
    backButton = document.getElementById("backButton");

function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
}

berryIcon.addEventListener("click", function () {
   dykHead.innerText = "Raspberries";
    factText.innerText = "Despite their apparent delicacy, raspberries are packed with fiber, thanks in part to their tiny edible seeds. Some of the fiber is soluble fiber in the form of pectin, which lowers cholesterol. Raspberries are also a good source of vitamin C.";
    playAudio();
});

beansIcon.addEventListener("click", function () {
   dykHead.innerText =  "Beans";
    factText.innerText = "Kidney beans are one of the most commonly consumed beans. It can help slow the absorption of sugar into the blood and therefore reduce blood sugar levels.";
    playAudio();
});

edamameIcon.addEventListener("click", function () {
    dykHead.innerText =  "Edamame";
    factText.innerText = "Edamame is prepared by boiling immature soybeans with their pods and is commonly served as a side dish. This type of soybean was originally common in Japan, it is slowly gaining fame in different parts of the world.";
    playAudio();
});

//jquery for the poop fact icon (tissue) / animation.css

$('#factLogo').on('click', function () {

    $(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated rubberBand');
        location.href = 'digestibles.html'
    });
});




