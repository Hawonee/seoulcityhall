$(function(){
  /**
   * @링크이동
   * 
   */
// 언어별 사이트 이동
  $('#langBtn').click(function(){
    url=$('#lnagList').val();
    window.open(url)
  })

  // 메인 슬라이드

  var visualSlide = new Swiper(".sc-visual .swiper", {
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    on:{
      "slideChange":function(){
        idx=this.realIndex; //현재 작동중인 슬라이드 넘버
        if(idx>=4){
          $('.sc-visual .group-nav .btn-nav.citizens').addClass('on').siblings().removeClass('on');
        }else{
          $('.sc-visual .group-nav btn-nav.news').addClass('on').siblings().removeClass('on');
        }

      }
    }
  });

  $('.sc-visual .group-nav .btn-nav').click(function(e){
    e.preventDefault();

    if($(this).hasClass('news')){
      visualSlide.slideTo(0)
    }else{
      visualSlide.slideTo(4)
    }
    $(this).addClass('on').siblings().removeClass('on');
  })


  $('.sc-visual .control-area .auto').click(function(){

    if($(this).hasClass('on')){
      $(this).removeClass('on').attr('aria-label','자동재생 정지')
      visualSlide.autoplay.start();

    }else{
      $(this).addClass('on').attr('aria-label','자동재생 적용')
      visualSlide.auto.stop();
    }

  })

  // 하단 배너 슬라이드 
  var bannerSlide = new Swiper(".sc-banner .swiper",{
      slidesPerView:3,
      spaceBetween:43,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });

  $('.sc-banner .control-area .auto').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on').attr('aria-label','자동재생 정지')
      bannerSlide.auto.start();
    }else{
      $(this).addClass('on').attr('aria-label','자동재생 적용')
      bannerSlide.auto.stop();
    }
  })

  // 관련 사이트
  $('.btn-related').click(function(e){
    e.preventDefault();

    if($(this).hasClass('not')){
      url = $(this).data('url');
      window.open(url);
      return false;
    }

    if ($(this).hasClass('active')) {
      $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
    } else {
      $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
      $(this).addClass('active').siblings('.related-area').slideDown(300);
    }

  })
// 벨로그
  $('.related-area .sub-item').keydown(function(e){
    key = e.keyCode;
    if(key === 9 && e.shiftKey && $(this).is(':first-child')){
      $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
    }    
    else if(key === 9 && !e.shiftKey && $(this).is(':last-child')){
      $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
    }   
  })


  // $('.related-area .sub-item:first-child').keydown(function(e){
  //   key = e.keyCode;
  //   if(key === 9 && e.shiftKey){
  //     $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
  //   }    
  // })

  // $('.related-area .sub-item:last-child').keydown(function(e){
  //   key = e.keyCode;

  //   if(key === 9 && !e.shiftKey){
  //     $('.btn-related').removeClass('active').siblings('.related-area').slideUp(300);
  //   }   
  // })

//   const subItems = document.querySelectorAll('.related-area .sub-item');

// subItems.forEach((item) => {
//   item.addEventListener('keydown', (event) => {
//     const key = event.keyCode;
//     if (key === 9 && event.shiftKey && item.matches(':first-child')) {
//       document.querySelector('.btn-related').classList.remove('active');
//       document.querySelector('.related-area').classList.remove('active');
//     } else if (key === 9 && !event.shiftKey && item.matches(':last-child')) {
//       document.querySelector('.btn-related').classList.remove('active');
//       document.querySelector('.related-area').classList.remove('active');
//     }
//   });
// });


})