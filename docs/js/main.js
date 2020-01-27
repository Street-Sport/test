$(function(){


  $('#nav_toggle').on('click', function () {
    $(this).toggleClass('active'),
    $('.menu-row').toggleClass('active')
    // $('body').toggleClass('noscroll')
  });

  $('.slider').slick({
    infinite: true,
    fade: true,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots'
  });

  /* Плавный скрол к элементам*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);

  });
  
});