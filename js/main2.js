/*
 * @Author: GXF
 * @Date:   2016-11-16 21:04:47
 * @Last Modified by:   GXF
 * @Last Modified time: 2016-11-21 15:10:15
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

})
