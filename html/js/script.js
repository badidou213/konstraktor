/*
 Theme Name: Konstraktor - Construction HTML5 Template
 Version: 1.0
*/

(function ($) {
  "use strict";

  //Hide preloader
  function hidePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Hero section swiper
  if ($(".heroSwiper").length) {
    var heroSwiper = new Swiper(".heroSwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      simulateTouch: false,
    });
  }

  //Completed projects section gallery
  if ($(".gallery-link").length) {
    $(".gallery-link").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  //Parallax for video section background
  if ($(".jarallax").length) {
    jarallax($(".jarallax"));
  }

  //Video section button
  if ($(".popup-youtube").length) {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
    });
  }

  //Projects section swiper
  if ($(".projectsSwiper").length) {
    var projectsSwiper = new Swiper(".projectsSwiper", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".projects-button-next",
        prevEl: ".projects-button-prev",
      },
    });
  }

  //Testimonials section swiper
  if ($(".testimonialsSwiper").length) {
    var testimonialsSwiper = new Swiper(".testimonialsSwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  //Partners section swiper
  if ($(".partnersSwiper").length) {
    var partnersSwiper = new Swiper(".partnersSwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
      },
    });
  }

  // Click event to scroll to top.
  if ($(".back-to-top").length) {
    $(".back-to-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  }

  /* ==========================================================================
   Window events
   ========================================================================== */

  // Hide preloader after load
  $(window).on("load", function () {
    hidePreloader();
  });

  // Show back to top button after scroll
  $(window).on("scroll", function () {
    if ($(".back-to-top").length) {
      if ($(this).scrollTop() > 800) {
        $(".back-to-top").addClass("show-back-to-top");
      } else {
        $(".back-to-top").removeClass("show-back-to-top");
      }
    }
  });

  /* ==========================================================================
    Initialize AOS plugin
========================================================================== */

  AOS.init({
    once: true,
    startEvent: "load",
  });
})(window.jQuery);
