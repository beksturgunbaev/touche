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
// При клике на стрелочку назад (моб версия):
    $('.revista__img').click(function() {
        $(this).parent().parent().parent().parent().parent().removeClass('_active');
    });
    $('.tienda__img').click(function() {
        $(this).parent().parent().parent().parent().parent().removeClass('_active');
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
        $('.icon-menu').addClass('no-click');
        $('.search-mob').addClass('no-click');
        $('.head-login-icon').addClass('no-click');
    }); 
    $('.tienda-back').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').removeClass('active');
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
        $('.icon-menu').removeClass('no-click');
        $('.search-mob').removeClass('no-click');
        $('.head-login-icon').removeClass('no-click');
    });
// При клике на товар:
    $('.tienda---link').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').addClass('active');
    }); 
    $('.filtros-back').click(function() {
        $('.tienda-sidebar').addClass('active');
        $('.filtros-sidebar').removeClass('active');
    });

    $('.promo-link').click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').addClass('active');
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
// Функция для картинки продукта:
    $('.first-img').click(function() {
        $('.product-mini-img').removeClass('active');
        $(this).addClass('active');
        $('.big-product-img').fadeOut();
        $('.big-product-img').hide();
        $('.product-first-img').fadeIn();
        $('.product-first-img').show();
    });
    $('.second-img').click(function() {
        $('.product-mini-img').removeClass('active');
        $(this).addClass('active');
        $('.big-product-img').fadeOut();
        $('.big-product-img').hide();
        $('.product-second-img').fadeIn();
        $('.product-second-img').show();
    });
// Функция для модалки:
    $('.forgot-password').click(function() {
        event.preventDefault();
        $('.modal-recover-email').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.close-modal').click(function() {
        $('.modal-recover-email').removeClass('active');
        $('body').css('overflow', 'auto');
    });
// При клике на иконку Бургер меню:
    $('.icon-menu').toggle(function() {
        $('.bg').css('display', 'block');
        $('.bg').css('background', 'rgb(0, 0, 0, .2)');
    }, function() {
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
        $('.menu__body').removeClass('_active');
        $('.icon-menu').removeClass('_active');
    });


// Клик на затемненное пространосво:
    $(".bg").click(function() {
        $('.tienda-sidebar').removeClass('active');
        $('.filtros-sidebar').removeClass('active');
        $('.bg').css('display', 'none');
        $('.bg').css('background', 'rgb(0, 0, 0)');
        $('.menu__body').removeClass('_active');
        $('.icon-menu').removeClass('_active');
        $('.menu__body').removeClass('_active');
        $('.icon-menu').removeClass('_active');
        $('.icon-menu').removeClass('no-click');
        $('.search-mob').removeClass('no-click');
        $('.head-login-icon').removeClass('no-click');
    });
// Переход на страницу MIS_DATOS.HTML:
    $('.personal-btn').on('click', function() {
        window.location = 'mis-datos.html';
    });
// При нажатии иконку назад в моб версии:
    $('.tienda__arrowLeft').click(function() {
        $('._tabs-block').removeClass('_active');
    });
// При клике на объем продукта:
    $('.product-detail-ml-pointer::first-child').click(function() {
        $('.product-detail-ml').removeClass('active');
        $(this).addClass('active');
        $('.product-detail-cost2').removeClass('active');
        $('.product-detail-cost1').addClass('active');
    });
    $('.product-detail-ml-pointer::nth-child(2)').click(function() {
        $('.product-detail-ml').removeClass('active');
        $(this).addClass('active');
        $('.product-detail-cost1').removeClass('active');
        $('.product-detail-cost2').addClass('active');
    });
// Проверка инпутов:
    // var value = $('.password-input').val();
    $('.password-input').keyup(function() {
        if($(this).val().length < 8) {
            $(this).addClass('error-txt');
            $('.password-error').css('display', 'block');
            return false;
        }
        else {
            $(this).removeClass('error-txt');
            $('.password-error').css('display', 'none');
        }
    });
// Проверка эмайл модалки:
    $('.modal-btn').click(function() {
        if($('.modal-input').val().length == '') {   
            $('.modal-input').css('border-bottom', '1px solid rgb(255, 0, 0, .3)');
            $('.email-error-modal').css('display', 'block');
            $('.modal-vector').css('opacity', '0');
            $('.modal-success').css('display', 'none');
            return false;
        }
        else {
            $('.modal-input').css('border-bottom', '1px solid rgb(0, 0, 0, .3)');
            $('.email-error-modal').css('display', 'none');
            $('.modal-vector').css('opacity', '.3');
            $('.modal-success').css('display', 'block');
        }
    });
// При нажатии на красные фильтры (цены):
    $('.sidebar-red-menu1').click(function() {
        $('.filtros-cost1').css('display', 'block');
    });
    $('.sidebar-red-menu2').click(function() {
        $('.filtros-cost2').css('display', 'block');
    });
    $('.sidebar-red-menu3').click(function() {
        $('.filtros-cost3').css('display', 'block');
    });
// При клике на чекбоксы:
    $('.checkbox-element').click(function() {
        $(this).toggleClass('active');
    });
// Swipe slider
    $(".big-product-img").on("dragstart", function() {
        $('.product-mini-img').removeClass('active');
        $(this).next().addClass('active');
        $('.big-product-img').fadeOut();
        $('.big-product-img').hide();
        $(this).next().fadeIn();
        $(this).next().show();
        $('.product-mini-img').removeClass('active');
        $('.product-mini-img').next().addClass('active');
        if($(this).is(':last-child')) {
            $('.product-mini-img').removeClass('active');
            $(this).prev().addClass('active');
            $('.big-product-img').fadeOut();
            $('.big-product-img').hide();
            $(this).prev().fadeIn();
            $(this).prev().show();
            $('.product-mini-img').removeClass('active');
            $('.product-mini-img').prev().addClass('active');
        }
    });
// Клик на сохраненные товары:
    $('.saved-article').click(function() {
        $(this).find('svg path').toggleClass('not-active');
    });
}); 