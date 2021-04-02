$(function(){
    var $win = $(window);
    //ハンバーガーメニュー
    if($win.width() < 600) {
        $('.burger-btn').click(function(){
            $(this).toggleClass('crossed');
            $('body').toggleClass('nonscroll');
            $('.header-nav').fadeToggle(300);
        });
    }
});