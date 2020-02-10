var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

jQuery(document).ready(function(){
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        margin: 100
    });
});