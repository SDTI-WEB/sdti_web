$(function () {

    // 滾動進場
    $(window).scroll(function () {
        _scroll_top = $(window).scrollTop();
        _window_height = $(window).height();
        _object_top = $('.content').offset().top;
        if (_scroll_top > _object_top - _window_height / 1.5) {
            $('.content_wrap').addClass('active');
        }
    })
})