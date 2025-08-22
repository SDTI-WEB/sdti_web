var _media = $(window).width();
var _scroll_top;
var _object_top;
var _window_height;
var video_link;



$(function () {

    // tab切換

    var _tab;
    $('.tab_control .tab_btn').click(function () {
        _tab = $(this).index();
        console.log(_tab);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_area .tab_show').eq(_tab).addClass('active').siblings().removeClass('active');
    })


    // 手機板選單

    var $menu_open = $('.menu_open');
    var $menu_close = $('.menu_close');

    $menu_open.click(function () {
        $('.menu').addClass('active');
    })
    $menu_close.click(function () {
        $('.menu').removeClass('active');
    })

    // 手機板換圖


    if (_media < 768) {
        // var $title_photo = $('.title_photo img');
        // $title_photo.attr('src', $title_photo.attr('data-moible'));
        $('.title_photo').each(function (i, e) {
            var imgobj = $(e).children("img");
            imgobj.attr("src", imgobj.attr("data-mobile-src"));
        });
    }


    // footer svg

    // new Vivus('phone1', {
    //     duration: 100
    // });
    // new Vivus('phone2', {
    //     duration: 100
    // });
    // new Vivus('email', {
    //     duration: 100
    // });

    // 置頂TOP


    var $btn_top = $('.btn_top');
    var $body = $('body,html');
    $btn_top.click(function () {
        $body.animate({
            scrollTop: 0
        }, 1000, 'linear');
    })

    $(window).scroll(function () {
        _scroll_top = $(window).scrollTop();
        _window_height = $(window).height();
        if (_scroll_top > _window_height) {
            $btn_top.addClass('active');
        } else {
            $btn_top.removeClass('active');
        }
    })

    // light_box

    var $open_video = $('.open_video');
    var $light_box = $('.light_box');

    $open_video.click(function () {
        video_link = $(this).attr('data-src');
        $light_box.addClass('active').find('iframe,video').attr('src', video_link);
    })
    $('.light_box .close').click(function () {
        $light_box.removeClass('active').find('iframe,video').attr('src', '');
    })

})