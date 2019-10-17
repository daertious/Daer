// WELCOME SECTION
    $(function(){
            $('.enter-button').click(function () {
                $('.welcome-section').addClass('content-hidden');
                setTimeout(function(){ $('.welcome-section').addClass('content-delete'); $('.enter-button').addClass('content-delete'); }, 2000);
                // TWEENMAX
                TweenMax.from(".header-title", 3, {x:300, opacity:0});             
                TweenMax.from(".header-short-description", 3, {x:-300, opacity:0});
                TweenMax.from(".header-short-description2", 3, {x:-300, opacity:0});
                TweenMax.from(".header-short-description3", 3, {x:-300, opacity:0});
            });
            
    });
// END WELCOME SECTION

// NAV
$(function(){

    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-content').toggleClass('menu-content_delete');
        TweenMax.from(".menu-li", 1, {y:-300, opacity:1});
    });
    $('.menu-li').on('click', function (e) {
        e.preventDefault;
        $('.menu-btn').removeClass('menu-btn_active');
        $('.menu-content').toggleClass('menu-content_delete');
    });
});
// END NAV

