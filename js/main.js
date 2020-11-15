$(function(){

  function scrollMenu() {
    let menu = document.querySelector('.header__top');
    window.addEventListener('scroll', () => {
      if (pageYOffset >= document.documentElement.clientHeight / 2) {
        menu.style['background-color'] = 'rgba(15, 10, 20, .5)'
        menu.style['height'] = '120px'
      } else {
        menu.style['background-color'] = 'transparent'
        menu.style['height'] = '104px'
      }
    });
  }

  scrollMenu();

  $(".menu a, .logo, .footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  

  $('.slider__items').slick({
    arrows: false,
    dots: true
  });

  $('.menu__btn').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });

  var mixer = mixitup('.portfolio__content');

})