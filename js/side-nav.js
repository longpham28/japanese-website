const activeNav = document.querySelectorAll('a');
for (let i of activeNav) {
  if (i.textContent === document.title) {
    i.style.fontWeight = 'bold';
    i.style.fontSize = '20px';
  }
}
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
