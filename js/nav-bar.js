$(document).ready(() => {
  $("#nav-bar-1").on('mouseenter', function () {
    $("#sub-nav").slideDown('fast');
  });
  $("header").on('mouseleave', function () {
    $("#sub-nav").slideUp('normal');
  });
});
