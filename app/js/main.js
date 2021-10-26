$(function () {
  $(".menu a, .header a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  function scrollMenu() {
    let menu = document.querySelector(".menu");
    window.addEventListener("scroll", () => {
      if (pageYOffset >= document.documentElement.clientHeight / 1) {
        menu.style["position"] = "fixed";
        menu.style["top"] = "0";
        menu.style["width"] = "100%";
        menu.style["max-width"] = "1920px";
        menu.style["z-index"] = "999";
      }
    });
  }
  scrollMenu();

  $(".footer__btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this;
    setTimeout(function () {
      $(that).removeClass("fly");
    }, 5400);
  });

  AOS.init();

  var mixer = mixitup(".portfolio__items", {
    selectors: {
      control: ".portfolio__filters > .nav-filter__btn",
    },
  });

  const burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("burger--active");
  });

  $(".burger").on("click", function () {
    $(".menu__inner").toggleClass("menu__inner--active");
  });
});
