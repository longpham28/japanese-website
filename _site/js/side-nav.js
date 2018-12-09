$(document).ready(() => {
  $(".open-button").on('click', () => {
    $(".side-nav").show();
    $("main").addClass('go-right');
    $(".open-button").hide();
  });

  $(".close-button").on('click', () => {
    $(".side-nav").hide();
    $("main").removeClass('go-right');
    $(".open-button").show();
  });
})
