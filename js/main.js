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
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
    }
});
});

// セクションタイトル
function fadeIn(){
  $('.js-fadeIn-right').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
  $('.js-fadeIn-left').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
  $('.js-work-article').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
  $('.js-news-button').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
  $('.js-news-article').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }
  });
}

$(window).scroll(function(){
  fadeIn();
})

// セクションタイトル
function mainView(){
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
  mainView();
})