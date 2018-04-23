var display = document.getElementById("display"),
    factDisplay = document.getElementById("factDisplay"),
    girl = document.getElementById("nervousSystem"),
    shit = document.getElementById("shit");

girl.addEventListener("click", function () {
    factDisplay.innerHTML = "<h2>By eliminating waste, your body can respond better to the source of the stress when the nervous system goes in to the fight or flight response.</h2>"

    shit.style.display = "block";
});

$('#nervousSystem').on('click', function () {

    $('#shit').addClass('animated bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('#shit').removeClass('animated bounceInDown');
    });
    
    $('#factLogo').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('#factLogo').removeClass('animated bounce');
    });
});