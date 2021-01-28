$(function(){

  $(".star").rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: "rgba(139, 108, 202, 1)"
  });

  $('.menu__btn').on('click', function(){
    $('.header__top').toggleClass('header__top--active')
  });

});