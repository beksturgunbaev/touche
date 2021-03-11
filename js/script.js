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
// При клике на иконку Бургер меню:
$('.icon-menu').toggle(function() {
    $('.bg').css('display', 'block');
    $('.bg').css('background', 'rgb(0, 0, 0, .2)');
}, function() {
    $('.bg').css('display', 'none');
    $('.bg').css('background', 'rgb(0, 0, 0)');
});
// При клике на иконку Войти:
$('.head-user-icon').hover(function() {
    $('.bg').css('display', 'block');
    $('.bg').css('background', 'rgb(0, 0, 0, .2)');
}, function() {
    $('.bg').css('display', 'none');
    $('.bg').css('background', 'rgb(0, 0, 0)');
});
// При клике на иконку Поиск:
$('.search-img').hover(function() {
    $('.bg').css('display', 'block');
    $('.bg').css('background', 'rgb(0, 0, 0, .2)');
}, function() {
    $('.bg').css('display', 'none');
    $('.bg').css('background', 'rgb(0, 0, 0)');
});
// При наведении на иконку "Поиск":
    $('.search-sub-block').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });

// При выборе фильтры:
    $('.sidebar-checkItem').toggle(function() {
        $(this).find('.check-block').css('background', '#000');
    }, function() {
        $(this).find('.check-block').css('background', '#fff')
    });
// При нажатии на фильтр:
    $('.filtros').click(function() {
        $('.filtros-sidebar').addClass('active');
        $('.page').css('background', 'rgb(0, 0, 0, .1)');
        $('.goods__bodys').css('background', 'rgb(225, 225, 225, .9)');
        $('.tienda-container').css('z-index', '-1');
    }); 
    $('.filtros-back').click(function() {
        $('.filtros-sidebar').removeClass('active');
        $('.page').css('background', 'transparent');
        $('.goods__bodys').css('background', '#fff');
        $('.tienda-container').css('z-index', '1');
    });
// При клике на Tienda:
    $('.tienda-link-btn').click(function() {
        $('.tienda-sidebar').addClass('active');
        $('.page').css('background', 'rgb(0, 0, 0, .1)');
        $('.goods__bodys').css('background', 'rgb(225, 225, 225, .9)');
        $('.tienda-container').css('z-index', '-1');
    }); 
    $('.tienda-back').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.page').css('background', 'transparent');
        $('.goods__bodys').css('background', '#fff');
        $('.tienda-container').css('z-index', '1');
    });
});