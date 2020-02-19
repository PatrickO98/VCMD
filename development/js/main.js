function toggleMenu() {
    $('header').toggleClass('menu-active');
    $('.navbar ul.menu').toggleClass('active');
}

var $doc = $('html, body');
$('a').click(function() {
    var parent = $(this).parent().parent();
    if(parent.hasClass('active')) {
        toggleMenu();
    }

    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000
    });

    $('.navbar button.hambg').click(function() {
        toggleMenu();
    });
});