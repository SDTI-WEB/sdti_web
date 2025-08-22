var _media = $(window).width();

$(function () {

    var imf = $('input[type=text]').val();
    $("input[type=text]").focus(function () {
        $(this).siblings().addClass('active')
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
            $(this).siblings().removeClass('active')
        }
    });
})