$(document).ready(function() {
    var wrap = $('.container');
    var index = 0;
    var alink = wrap.find('a');
    var imgs = wrap.find('img');
    var mouseEvent = function(event) {
        event.stopPropagation();
        index = $(this).index();
        swiper();
    };
    var keyEvent = function(event) {
        event.stopPropagation();
        if (event.keyCode == 37) {
            index = index > 0 ? --index : alink.length - 1;
        } else if (event.keyCode == 39) {
            index = index < alink.length - 1 ? ++index : 0;
        } else {
            return true;
        }
        swiper();
    }
    var events = {
        mouseenter: mouseEvent,
        keydown: keyEvent
    };
    alink.add(document).on(events);
    var swiper = function() {
        imgs.eq(index).stop().fadeIn('slow').siblings().stop().fadeOut('slow');
    }
});
