$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleSlide('.link_detail');
    toggleSlide('.link_back');

    //modal

    $('[data-modal=consult]').on('click', function() {
        $('.overlay, #consult').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consult, #order, #thanks').fadeOut();
    });
    $('.button_buy').each(function(i) {
        $(this).on('click', function() { 
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    });

    //validate

    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "???????????????????? ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? {0} ??????????????!")
                },
                phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                email: {
                    required: "???????????????????? ?????????????? ???????? ??????????",
                    email: "?????????????????????? ???????????? ?????????? ??????????"
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consult form');
    valideForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99",{autoclear: false});
});