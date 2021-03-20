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
$('.head-login-icon').hover(function() {
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

$('.extra-class-hover').hover(function() {
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
    $('.tienda---link').toggle(function() {
        $(this).find('.check-block').css('background', '#000');
    }, function() {
        $(this).find('.check-block').css('background', '#fff')
    });
// При нажатии на фильтр:
    $('.filtros').click(function() {
        $('.tienda-sidebar').addClass('active');
        $('.bg').css('display', 'block');
        $('.bg').css('background', 'rgb(0, 0, 0, .2)');
    }); 
    $('.tienda-back').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').removeClass('active');
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
    });
// При клике на товар:
    $('.tienda---link').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').addClass('active');
    }); 
    $('.filtros-back').click(function() {
        $('.tienda-sidebar').addClass('active');
    });

// При клике на Revista:
    $('.revista-header').click(function() {
        $('.bg').css('display', 'block');
        $('.bg').css('background', 'rgb(0, 0, 0, .2)');
        $('.revista-sidebar').addClass('active');
    });
    $('.revista-back').click(function() {
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
        $('.revista-sidebar').removeClass('active');
    });
// Удалить активный класс в меню:
    if($(window).width() < 991) {
        $('.menu__link').removeClass('active_menu');
        $('.tienda__list__extra .tienda__link').removeClass('link_after');
    }
    $('.ojos-link').hover(function() {
        $('._tabs-block2').addClass('_active');
    }, function() {
        $('._tabs-block2').removeClass('_active');
    });
    $('._tabs-block2').hover(function() {
        $(this).addClass('_active');
    }, function() {
        $(this).removeClass('_active');
    });
// Функция для чекбоксов:
    $('.sidebar-checkItem').click(function() {
        $(this).find('.check-block').toggleClass('active');
    });
// Удалить выбранные фильтры:
    $('.delete-filtros').click(function() {
        $(this).parent().css('display', 'none');
    });
    $('.clear-all-btn').click(function() {
        $('.checked-product').css('display', 'none');
    });
// Кнопка "Listo":
    $('.listo-btn').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').removeClass('active');
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
    });
// Страница Product. Функция для кнопок + и - :
    var counter = 1;
    $('.product-plus').click(function() {
        counter ++;
        $('.product-count').text(counter);
    });
    $('.product-minus').click(function() {
        if(counter > 0) {
            counter --;
        }  
        $('.product-count').text(counter);
    });  
});