let $character = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n", "ga", "gi", "gu", "ge", "go", "za", "ji", "du", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po", "kya", "kyu", "kyo", "sha", "shu", "sho", "cha", "chu", "cho", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "mya", "myu", "myo", "rya", "ryu", "ryo", "gya", "gyu", "gyo", "ja", "ju", "jo", "bya", "byu", "byo", "pya", "pyu", "pyo", ];

const speakChar = char => {
  $("#" + char + "-audio").get(0).play();
}
const writeChar = char => {
  $("#" + char + "-write").toggleClass("active");
}

const deactiveImage = char => {
  $('.popup-image').not("#" + char + "-write").removeClass("active");
}

$(document).ready(() => {
  $.each($character, function (i, val) {
    $("#" + val).on('click', function () {
      speakChar(val);
      writeChar(val);
      deactiveImage(val);
    });
  });

  $('.popup-image').on('click', function () {
    $('.popup-image').removeClass("active");
  });

});
