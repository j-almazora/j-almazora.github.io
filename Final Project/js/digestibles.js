

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
    });
});

$('#pooptypeIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
    });
});

$('#poopColorIcon').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
    });
});

$('#poopProcess').on('click', function () {

    $(this).addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated jello');
    });
});


