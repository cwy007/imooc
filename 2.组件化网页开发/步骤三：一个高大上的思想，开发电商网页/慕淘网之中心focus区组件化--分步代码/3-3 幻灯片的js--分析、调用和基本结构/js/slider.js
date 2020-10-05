(function($) {
    'use strict';
    function Slider($elem,options){
        this.$elem=$elem;
        this.options=options;
        this._init();
    }

    Slider.DEFAULTS={
        css3: false,
        js: false,
        animation: 'slide', // slide
        activeIndex: 0,
        interval: 0
    };

    Slider.prototype._init=function(){

    };
    Slider.prototype.to=function(){
        
    };
    Slider.prototype._fade=function(){
        
    };
    Slider.prototype._slide=function(){
        
    };
    Slider.prototype.auto=function(){
        
    };
    Slider.prototype.pause=function(){
        
    };

     $.fn.extend({
        slider: function(option) {
            return this.each(function() {
                
                var $this=$(this),
                slider=$this.data('slider'),
                options = $.extend({}, Slider.DEFAULTS, $(this).data(), typeof option==='object'&&option);
                // dropdown(this, options);  
                if(!slider){//解决多次调用dropdown问题
                    $this.data('slider',slider=new Slider($this,options));

                }  

                if(typeof slider[option]==='function'){
                    slider[option]();

                }

            });

        }
    });  


})(jQuery);