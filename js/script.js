$(document).ready(function() {
// Кнопка на вверх:
    $(window).scroll(function () {
    if ($(this).scrollTop() != 0) $("#toTop").fadeIn();
    else $("#toTop").fadeOut();
    });
    $("#toTop").click(function () {
        $("body, html").animate(
        	{
        	scrollTop: 0,
        	},
        	800
        );
    });
// При наведении на иконки Войти:
    // $('.head-login-icon').hover(function() {
    //     $('body').css('background', 'rgb(0,0,0,.4');
    // }, function() {
    //     $('body').css('background', 'transparent');
    // });

    $('.search-sub-block').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });
});