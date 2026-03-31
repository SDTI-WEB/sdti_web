var _media = $(window).width();

$(function () {

    var _open = 'Open';
    var _close = 'close';
    // 手風琴功能
    $('.accordion_title').click(function () {
        if ($(this).parent().hasClass('active') == false) {
            $(this).find('p').html(_close);
        } else {
            $(this).find('p').html(_open);
        }
        $(this).parent().toggleClass('active');
    })
})