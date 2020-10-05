(function($) {
    'use strict';
    function Slider($elem,options){
        this.$elem=$elem;
        this.options=options;
        this.$items = this.$elem.find('.slider-item');
        this.$indicators = this.$elem.find('.slider-indicator');
        // this.$controlLeft=this.$elem.find('.slider-control-left');
        // this.$controlRight=this.$elem.find('.slider-control-right');
        this.$controls = this.$elem.find('.slider-control');
        this.itemNum = this.$items.length;
        this.curIndex = this._getCorrectIndex(this.options.activeIndex);
        
        this._init();
        
    }

    Slider.DEFAULTS={
        css3: false,
        js: false,
        animation: 'fade', // slide
        activeIndex: 0,
        interval: 0
    };

    Slider.prototype._init=function(){
        var self=this;
        // init show              
        
        this.$indicators.removeClass('slider-indicator-active');
        this.$indicators.eq(this.curIndex).addClass('slider-indicator-active');
        //to
         if(this.options.animation==='slide'){
            this.$elem.addClass('slider-slide'); 
            this.$items.eq(this.curIndex).css('left',0);
            // move init
            this.$items.move(this.options); 
            this.to=this._slide;
        }else{
            this.$elem.addClass('slider-fade');  
            this.$items.eq(this.curIndex).show();
            // showHide init
            this.$items.showHide(this.options);
            this.to=this._fade;
        }
        


           
            

        //bind event
            this.$elem
            .hover(function(){
                self.$controls.show(); 
            },function(){
                self.$controls.hide();
            })
            .on('click','.slider-control-left',function(){
                self.to(self._getCorrectIndex(self.curIndex-1)); 
            })
            .on('click','.slider-control-right',function(){
                self.to(self._getCorrectIndex(self.curIndex+1)); 
            })
            .on('click','.slider-indicator',function(){
                self.to(self._getCorrectIndex(self.$indicators.index(this))); 
            });

        // auto
        if(this.options.interval && !isNaN(Number(this.options.interval))){
            this.$elem.hover($.proxy(this.pause,this),$.proxy(this.auto,this));
            this.auto();
        } 
        // send message
        this.$items.on('show shown hide hidden',function (e) {
            self.$elem.trigger('slider-'+e.type,[self.$items.index(this),this]);
            // 发送消息，同时传参当前显示的第几个及该DOM
        });   
    };

    Slider.prototype._getCorrectIndex = function(index) {
        if (isNaN(Number(index))) return 0;
        if (index < 0) return this.itemNum - 1;
        if (index > this.itemNum - 1) return 0;
        return index;
    };
    
    Slider.prototype._fade=function(index){
        if(this.curIndex===index)return;
        this.$items.eq(this.curIndex).showHide('hide');
        this.$items.eq(index).showHide('show');
        this.$indicators.eq(this.curIndex).removeClass('slider-indicator-active');
        this.$indicators.eq(index).addClass('slider-indicator-active');        
        this.curIndex=index;

        
    };
    Slider.prototype._slide=function(){

        
    };
    Slider.prototype.auto=function(){
        var self=this;
        this.intervalId=setInterval(function () {
            self.to(self._getCorrectIndex(self.curIndex+1));
        },this.options.interval);
        
    };
    Slider.prototype.pause=function(){
        clearInterval(this.intervalId);
        
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