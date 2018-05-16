//jquery animations for the icons using animate.css

$('#factIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
        location.href = 'poopFact.html';
    });
});

$('#dietIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
        location.href = 'healthyDiet.html';
    });
});

$('#pooptypeIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
        location.href = 'Poop%20Type%20page.html'
    });
});

$('#poopColorIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
        location.href = 'poopcolor.html';
    });
});

$('#poopProcess').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
        location.href = 'factory1.html';
    });
});


//JAVASCRIPT

var listButton = document.getElementById("listButton"),
    listButton2 = document.getElementById("listButton2"),
    listMenu1 = document.getElementById("listMenu1"),
    listMenu2 = document.getElementById("listMenu2");

function playAudio(){
    var audio = document.getElementsByTagName("audio")[0];
     audio.play();
}

listButton.addEventListener("click", function () {
    listButton2.style.display = "block";
    listMenu1.style.display = "block";
    
    this.style.display = "none";
    listMenu2.style.display = "none";
    
    playAudio();
});

listButton2.addEventListener("click", function () {
    listButton.style.display = "block";
    listMenu2.style.display = "block";
    
    this.style.display = "none";
    listMenu1.style.display = "none";
    
    playAudio();
});

