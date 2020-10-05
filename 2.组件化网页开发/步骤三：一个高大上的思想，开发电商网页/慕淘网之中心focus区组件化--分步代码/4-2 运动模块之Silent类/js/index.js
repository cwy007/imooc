(function($) {

  'use strict';
  //menu
    $('.menu')
        .on('dropdown-show', function (e) {
            loadOnce($(this), buildMenuItem);
        })
        .dropdown({
            css3: true,
            js: false
        });


    function buildMenuItem($elem, data) {

        var html = "";
        if (data.length === 0) return;
        for (var i = 0; i < data.length; i++) {
            html += '<li><a href="' + data[i].url + '" target="_blank" class="menu-item">' + data[i].name + '</a></li>'
        }
        $elem.find('.dropdown-layer').html(html);

    }    

   //cart
    $('#cart').on('dropdown-show', function() {
        loadOnce($(this), function($elem, data) {
            buildCartItem($elem, data);
            updateCart($elem, data);
        });
    }).dropdown({

        css3: true,
        js: false
    });



     function buildCartItem($elem, data) {

        var html = "";
        if (data.length === 0) { // no goods
            html += '<div class="cart-nogoods"><i class="icon cart-nogoods-icon fl">&#xe600;</i><div class="cart-nogoods-text fl">购物车里还没有商品<br />赶紧去选购吧！</div></div>';
            $elem.find('.dropdown-layer').html(html);
            return;
        }

        html += '<h4 class="cart-title">最新加入的商品</h4><ul class="cart-list">';

        for (var i = 0; i < data.length; i++) {
            html += '<li class="cart-item"><a href="###" target="_blank" class="cart-item-pic fl"><img src="' + data[i].pic + '" alt="" /></a><div class="fl"><p class="cart-item-name text-ellipsis"><a href="###" target="_blank" class="link">' + data[i].name + '</a></p><p class="cart-item-price"><strong>￥' + data[i].price + ' x ' + data[i].num + '</strong></p></div><a href="javascript:;" title="删除" class="cart-item-delete link fr">X</a></li>';
        }

        html += '</ul><div class="cart-info"><span class="fl">共 <strong class="cart-total-num">0</strong> 件商品　共计<strong class="cart-total-price">￥ 0.00</strong></span><a href="###" target="_blank" class="cart-info-btn btn fr">去购物车</a></div>';

        // setTimeout(function(){
            $elem.find('.dropdown-layer').html(html);
        // },1000);
    }

    function updateCart($elem, data) {
        var $cartNum = $elem.find('.cart-num'),
            $cartTotalNum = $elem.find('.cart-total-num'),
            $cartTotalPrice = $elem.find('.cart-total-price'),
            dataNum = data.length,
            totalNum = 0,
            totalPrice = 0;

        if (dataNum === 0) { // no goods
            return;
        }

        for (var i = 0; i < dataNum; i++) {
            totalNum += +data[i].num;
            totalPrice += +data[i].num * +data[i].price;
        }

        $cartNum.html(totalNum);
        $cartTotalNum.html(totalNum);
        $cartTotalPrice.html('￥' + totalPrice);
    };


    //header search
    var $headerSearch = $('#header-search');
    var html = '',
        maxNum = 10;

    // 获得数据处理
    $headerSearch.on('search-getData', function(e, data) {
        var $this = $(this);
        html = createHeaderSearchLayer(data, maxNum);
        $this.search('appendLayer', html);
        // 将生成的html呈现在页面中        
        if (html) {
            $this.search('showLayer');
        } else {
            $this.search('hideLayer');

        }
    }).on('search-noData', function(e) {
        // 没获得数据处理
        $(this).search('hideLayer').search('appendLayer', '');

    }).on('click', '.search-layer-item', function() {
        // 点击每项时，提交
        $headerSearch.search('setInputVal', $(this).html());
        $headerSearch.search('submit');
    });

    $headerSearch.search({
        autocomplete: true,
        css3: false,
        js: false,
        animation: 'fade',
        getDataInterval: 0
    });

    // 获取数据，生成html
    function createHeaderSearchLayer(data, maxNum) {
        var html = '',
            dataNum = data['result'].length;

        if (dataNum === 0) {
            return '';
        }
        for (var i = 0; i < dataNum; i++) {
            if (i >= maxNum) break;
            html += '<li class="search-layer-item text-ellipsis">' + data['result'][i][0] + '</li>';
        }
        return html;

    }

    // focus-category

    $('#focus-category').find('.dropdown')
        .on('dropdown-show', function () {
            loadOnce($(this), createCategoryDetails);
        })
        .dropdown({
            css3: false,
            js: false
        });

    function createCategoryDetails($elem, data) {
        var html = '';

        for (var i = 0; i < data.length; i++) {            
            
            html += '<dl class="category-details cf"><dt class="category-details-title fl"><a href="###" target="_blank" class="category-details-title-link">' + data[i].title + '</a></dt><dd class="category-details-item fl">';

            for (var j = 0; j < data[i].items.length; j++) {
                
                html += '<a href="###" target="_blank" class="link">' + data[i].items[j] + '</a>';
            }

            html += '</dd></dl>';
        }
        // setTimeout(function () {
            $elem.find('.dropdown-layer').html(html);
        // },1000);
        
    };


    function loadOnce($elem, success) {
        var dataLoad = $elem.data('load');

        if (!dataLoad) return;

        if (!$elem.data('loaded')) {
            $elem.data('loaded', true);
            $.getJSON(dataLoad).done(function(data) {
                if (typeof success === 'function') success($elem, data);
            }).fail(function() {
                $elem.data('loaded', false);
            });
        }
    }

    


   

})(jQuery);