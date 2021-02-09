$(function(){

  $(".menu a, .header a").on("click", function (e) {
		  e.preventDefault();
		  var id  = $(this).attr('href'),
			top = $(id).offset().top;
		  $('body,html').animate({scrollTop: top}, 1000);
	 });

   function scrollMenu() {
    let menu = document.querySelector('.menu');
    window.addEventListener('scroll', () => {
      if (pageYOffset >= document.documentElement.clientHeight / 1.5) {
        menu.style['position'] = 'fixed'
        menu.style['top'] = '0'
        menu.style['width'] = '100%'
        menu.style['z-index'] = '999'
      } 
    });
  }
  scrollMenu();

  $(".footer__btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});

});