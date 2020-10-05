(function($) {
    'use strict';
    var transition = window.mt.transition;

    var Silent = function($elem) {
        this.$elem = $elem;
        this.$elem.removeClass('transition');
        this.curX = parseFloat(this.$elem.css('left'));
        this.curY = parseFloat(this.$elem.css('top'));

    };
    Silent.prototype.to = function(x, y) {
        x = (typeof x === 'number') ? x : this.curX;
        y = (typeof y === 'number') ? y : this.curY;
        if (this.curX === x && this.curY === y) return;

        this.$elem.trigger('move', [this.$elem]);
        this.$elem.css({
            left: x,
            top: y
        });
        this.curX = x;
        this.curY = y;
        this.$elem.trigger('moved', [this.$elem]);

    };
    Silent.prototype.x = function(x) {
        // if(this.curX===x) return;
        // this.$elem.css({
        // 	left:x
        // });
        // this.curX=x;
        this.to(x);
    };
    Silent.prototype.y = function(y) {
        // if(this.curY===y) return;
        // this.$elem.css({
        // 	top:y
        // });
        // this.curY=y;
        this.to(null, y);

    };



    // css3 方式
    var Css3 = function($elem) {
        this.$elem = $elem;
        this.$elem.addClass('transition');
        this.curX = parseFloat(this.$elem.css('left'));
        this.curY = parseFloat(this.$elem.css('top'));
        this.$elem.css({
        	left:this.curX,
        	top:this.curY
        });

    };

    Css3.prototype.to = function(x, y) {
    	x = (typeof x === 'number') ? x : this.curX;
        y = (typeof y === 'number') ? y : this.curY;
        if (this.curX === x && this.curY === y) return;
        // if(this.$elem.data('status')==='moving') return;
        // this.$elem.data('status','moving');
        var self = this;
        this.$elem.trigger('move', [this.$elem]);
        this.$elem.off(transition.end).one(transition.end, function() {
        	self.$elem.trigger('moved', [self.$elem]);
        //     self.$elem.data('status','moved');
        //     self.curX = x;
        //     self.curY = y;
        });
        // console.log(1);
        this.$elem.css({
            left: x,
            top: y
        });
        this.curX=x;
        this.curY=y;

    };
    Css3.prototype.x = function(x) {
    	this.to(x);

    };
    Css3.prototype.y = function(y) {
    	this.to(null,y);

    };


    var $box = $('#box'),
        $goBtn = $('#go-btn'),
        $backBtn = $('#back-btn'),
        move = new Css3($box);

    $box.on('move moved', function(e, $elem) {
        console.log(e.type);
        // console.log($elem);
    });
    $goBtn.on('click', function() {
        move.to(100, 50);
        // move.to(100);
    });

    $backBtn.on('click', function() {
        move.to(0, 20);
        // move.to(0);
    });


    // js方式
    var Js = function($elem) {

    };

    Js.prototype.to = function(x, y) {

    };
    Js.prototype.x = function(x) {

    };
    Js.prototype.y = function(y) {

    };



    $.fn.extend({
        move: function() {

        }

    });

})(jQuery);