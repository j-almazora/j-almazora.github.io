var display = document.getElementById("display"),
    factDisplay = document.getElementById("factDisplay"),
    dykHead = document.getElementById("dykHead"),
    factText = document.getElementById("factText");

var cancelDiv = document.getElementById("cancelDiv"),
    instruction = document.getElementById("instruction");

var answers = [
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Most likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Do not worry about it.',
  'Sorry, Mate!', 'Hell, yes.', 'Oh hell no!', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Absolutely, YES!', 'There is a small chance.', 'Yes! Yes!'];

//AUDIO

function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
};


//fortune telling

document.getElementById("coffeeIcon").addEventListener("click", function () {

    if (document.getElementById("fortuneInput").value == "") {
        alert("Please type in your question");
        document.getElementById("answerContainer").innerHTML = "";
    } else {
        var answer = answers[Math.round(Math.random() * answers.length)];

        document.getElementById("answerContainer").innerHTML = answer;
    }
});


$('#coffeeIcon').on('click', function () {

    $('#answerContainer').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('#answerContainer').removeClass('animated tada');
    });
});

//Coffee Fact

document.getElementById("coffee").addEventListener("click", function () {
    document.getElementById("dykHead").innerHTML = "<h3>Coffee helps release a hormone that stimulates the colon and makes you want to poop.</h3>";
    playAudio();
});

//INSTRUCTION DIV

cancelDiv.addEventListener("click", function () {
    instruction.style.display = "none";
    this.style.display = "none";
    playAudio();
});