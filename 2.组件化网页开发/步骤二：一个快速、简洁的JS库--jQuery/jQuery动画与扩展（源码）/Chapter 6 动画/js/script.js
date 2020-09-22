$(document).ready(function() {
    var index = 0;
    var mouseEvent = function(event) {
        event.stopPropagation();
        index = $(this).index();
        swiper();
    };
    var keyEvent = function(event) {
        event.stopPropagation();
        if (event.keyCode == 37) {
            index = index > 0 ? --index : $('a').length - 1;
        } else if (event.keyCode == 39) {
            index = index < $('a').length - 1 ? ++index : 0;
        } else {
            return true;
        }
        swiper();
    }
    var events = {
        mouseenter: mouseEvent,
        keydown: keyEvent
    };
    $('a').add(document).on(events);
    // var swiper = function() {
    //     $('img').eq(index).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // }
    // var swiper = function() {
    //     $('img').eq(index).stop().animate({ 'opacity': '1' }, 1000).siblings().stop().animate({ 'opacity': '0' }, 1000);
    // }
    // var swiper = function() {
    //     $('div').stop()
    //     .animate({'width': '0%'}, 1000)
    //     .delay(1000)
    //     .animate({'width': '100%'}, 1000);
    // }
    // var swiper = function() {
    //     $('img').eq(index)
    //     .stop().show('slow')
    //     .siblings()
    //     .stop().hide('slow');
    // }
    // var swiper = function() {
    //     $('div').stop().toggle('slow');
    // }
    var swiper = function() {
        $('img').eq(index)
        .stop().fadeIn('slow')
        .siblings()
        .stop().fadeOut('slow');
    }
    // var swiper = function() {
    //     $('div').stop().fadeToggle('slow');
    // }
    // var swiper = function() {
    //     $('img').eq(index)
    //     .stop().slideDown('slow')
    //     .siblings()
    //     .stop().slideUp('slow');
    // }
    // var swiper = function() {
    //     $('div').stop().slideToggle('slow');
    // }
});
