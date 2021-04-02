$(function(){
    //ステッキーメニュー
    var $win = $(window);

    $win.on('scroll', function(){
        var scrollHeight = $win.scrollTop();
        var fvHeight = $('.fv').height();
        
        if($win.width() > 600) {
            if(scrollHeight > fvHeight) {
                $('.header').addClass('fixed');
            } else {
                $('.header').removeClass('fixed');
            }
        }
    });
    
    
    //スライダー
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        arrows: false
    });
    
    //ハンバーガーメニュー
    if($win.width() < 600) {
        $('.burger-btn').click(function(){
            $(this).toggleClass('crossed');
            $('body').toggleClass('nonscroll');
            $('.header-nav').fadeToggle(300);
        });
    }
});