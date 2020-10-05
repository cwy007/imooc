(function($) {
    'use strict';

    function Tab($elem, options) {
        this.$elem = $elem;
        this.options = options;

        this.$items = this.$elem.find('.tab-item');
        this.$panels = this.$elem.find('.tab-panel');

        this.itemNum = this.$items.length;
        this.curIndex = this._getCorrectIndex(this.options.activeIndex);

        this._init();
    }
    Tab.DEFAULTS = {
        event: 'mouseenter', // click
        css3: false,
        js: false,
        animation: 'fade',
        activeIndex: 0,

    };
    Tab.prototype._init = function() {
        var self = this;

        // init show
        this.$items.removeClass('tab-item-active');
        this.$items.eq(this.curIndex).addClass('tab-item-active');
        this.$panels.eq(this.curIndex).show();


        // trigger event
        this.$panels.on('show shown hide hidden', function(e) {
            self.$elem.trigger('tab-' + e.type, [e.type, self.$panels.index(this), this]);
        });

        // showHide init
        this.$panels.showHide(this.options);

        // bind event
        this.options.event = this.options.event === 'click' ? 'click' : 'mouseenter';
        this.$elem.on(this.options.event, '.tab-item', function() {

            self.toggle(self.$items.index(this));

        });


    };
    Tab.prototype._getCorrectIndex = function(index) {
        if (isNaN(Number(index))) return 0;
        if (index < 0) return this.itemNum - 1;
        if (index > this.itemNum - 1) return 0;
        return index;
    };
    Tab.prototype.toggle = function(index) {
        if (this.curIndex === index) return;

        this.$panels.eq(this.curIndex).showHide('hide');
        this.$panels.eq(index).showHide('show');

        this.$items.eq(this.curIndex).removeClass('tab-item-active');
        this.$items.eq(index).addClass('tab-item-active');

        this.curIndex = index;
    };




    $.fn.extend({
        tab: function(option) {
            return this.each(function() {
                var $this = $(this),
                    tab = $this.data('tab'),
                    options = $.extend({}, Tab.DEFAULTS, $this.data(), typeof option === 'object' && option);

                if (!tab && typeof option !== 'object') return;

                if (!tab) { // first time
                    $this.data('tab', tab = new Tab($this, options));
                }

                if (typeof tab[option] === 'function') {
                    tab[option]();
                }
            });
        }
    });
})(jQuery);