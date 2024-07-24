$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-header-title").toggleClass("is-active");
    $(".background-circle").toggleClass("is-active");
    $(".js-drawer-inner").toggleClass("is-active");
    $(".js-drawer-list").toggleClass("is-active");
  });

  // スライダー/swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 'auto',
    speed: 6000,
    allowTouchMove:false,
    spaceBetween:10,
    slidesPerView:3,
    autoplay: {
      delay: 0,
    },
    breakpoints:{
      768:{
        slidesPerView: 2,
        spaceBetween:4,
      }
    }
});
});

// セクションタイトル
function fadeIn(){
  $('.js-fv').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
  $('.js-title').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
}

$(window).on('load', function(){
  fadeIn();
})