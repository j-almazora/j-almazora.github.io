//JOKES

var display = document.getElementById("display"),
    gasMe = document.getElementById("gasUp"),
    digestibles = document.getElementById("digestibles"),
    startQuiz = document.getElementById("startQuiz"),
    jokesDiv = document.getElementById("jokesDiv"),
    cancelDiv = document.getElementById("cancelDiv"),
    instruction = document.getElementById("instruction");

var jokes = ["joke1", "joke2", "joke3", "joke4", "joke5", "joke6","joke7"];

//gasMe.addEventListener("click", function () {
//  jokesDiv.style.display = "block";
//    
//    jokesDiv.innerHTML = "<p>"+jokes.toString()+"</p>";
//});

function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
}

cancelDiv.addEventListener("click", function () {
    instruction.style.display = "none";
    this.style.display = "none";
    playAudio();
});

gasMe.addEventListener("click", function () {
    playAudio();
});

digestibles.addEventListener("click", function () {
    playAudio();
});

startQuiz.addEventListener("click", function () {
    playAudio();
});

