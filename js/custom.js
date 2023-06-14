$(function () {


    // <헤더 : 스크롤 아래로 내리면 메인 메뉴바 안보이게>
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });



    let snum = 1;
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        slideActiveClass: 'on',
        on: {
            init: function () {
                // console.log('오잉???', this.realIndex, this.slides.length, this)
                $('.num span').text(this.realIndex + 1);
                $('.num strong').text(this.slides.length);
            },
            slideChangeTransitionEnd: function () {
                $('.num span').text(this.realIndex + 1);
                $('.cicle span:nth-child(1)').css({
                    transform: 'translate(-50%, 0) rotate(' + sum * 45 + 'deg)'

                })
            }
        }
    });


    // <메인배너 : 화살표 클릭>
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    // <메인배너 : 페이지별 도트 만들기>
    $('.main_visual .slide_dots li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
        $(this).addClass('on').siblings().removeClass('on');
    });

});