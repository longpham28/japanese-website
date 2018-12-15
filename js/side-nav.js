document.querySelector('.side-nav').innerHTML = '<a href="#" class="close-button">&times;</a><a href="alphabet.html">Alphabet</a><a href="hiragana.html">Hiragana</a><a href="katakana.html">Katakana</a><a href="vocabulary.html">Vocabulary</a><a href="phrases.html">Phrases</a><a href="numbers-and-time.html">Numbers and time</a><a href="verb.html">Verb</a><a href="transitive-instransitive.html">Transitive Verb and Intransitive Verb</a><a href="practice.html">Practice</a>';
const menu = document.querySelectorAll('a');
for (let i of menu) {
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
