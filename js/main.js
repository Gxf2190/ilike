/*
 * @Author: GXF
 * @Date:   2016-11-16 21:04:47
 * @Last Modified by:   GXF
 * @Last Modified time: 2016-11-21 20:36:38
 */

'use strict';
$(function() {

    function resize() {
        // 获取屏幕大小
        var windowScreen = $(window).width();

        // 判断屏幕大小
        var iswindowScreen = windowScreen < 768;
        $('#main_ad > .carousel-inner > .item').each(function(i, ele) {

            var imgSrc = iswindowScreen ? $(ele).data('image-xs') : $(ele).data('image-lg');
            // ele为dom
            $(ele).css("backgroundImage", "url(" + imgSrc + ")");

            console.log(imgSrc);
            // 当屏幕小于768时
            if (iswindowScreen) {
                $(ele).html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $(ele).empty();
            }
        })
    }
    $(window).on('resize', resize).trigger('resize');
    //初始化tooptip
    $('[data-toggle="tooltip"]').tooltip();
    //为products ul 添加横向滚动条
    var $navtabs = $(".nav-tabs");
    var width = 30;
    // 遍历孩子宽度
    $navtabs.children().each(function(index, element) {
        width += element.clientWidth;
    })

    // 判断此时ul总宽度与页面宽度的大小，如果超出显示横向滚动条

    if (width > $(window).width()) {

        $navtabs
            .css('width', width)
            .parent().css('overflowX', 'scroll');
    }
    // 为a添加点击事件
    $("#news .nav-pills a").on('click', function() {
        var $this = $(this);
        var title = $this.data('title');
        $('.news-title').text(title);
    });
    // 给轮播图添加手机滑动事件
    // 1 判断向左还是向右
    var $carousel = $('.carousel');
    var starX, endX;
    var distance = 50;
    $carousel.on('touchstart', function(e) {
        starX = e.originalEvent.touches[0].clientX;
    });
    $carousel.on('touchmove', function(e) {
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousel.on('touchend', function(e) {
        //根据distance触发轮播事件
        // .carousel('prev')
        var x = Math.abs(starX - endX);
        if (x > distance) {
            $(this).carousel(starX > endX ? 'next' : 'prev');
        }

    });

})
