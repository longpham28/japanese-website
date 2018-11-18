let hiraganaList = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"];

let romajiList = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];

class quiz {
  constructor() {
    this.hiragana = "";
    this.romaji = "";
  }

  getCharacters() {
    this.hiragana = hiraganaList[Math.floor(Math.random() * hiraganaList.length)];
    this.romaji = romajiList[hiraganaList.indexOf(this.hiragana)];
  }
};

let correctAnswer = new quiz();
let wrongAnswer1 = new quiz();
let wrongAnswer2 = new quiz();
let wrongAnswer3 = new quiz();

correctAnswer.getCharacters();
wrongAnswer1.getCharacters();
wrongAnswer2.getCharacters();
wrongAnswer3.getCharacters();

while (1 > 0) {
  if (correctAnswer == wrongAnswer1 || correctAnswer == wrongAnswer2 || correctAnswer == wrongAnswer3 || wrongAnswer1 == wrongAnswer2 || wrongAnswer1 == wrongAnswer3 || wrongAnswer2 == wrongAnswer3) {
    wrongAnswer1.getCharacters();
    wrongAnswer2.getCharacters();
    wrongAnswer3.getCharacters();
  } else break;
}


let choice = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];

let firstAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
let secondAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
let thirdAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
let fourthAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;

while (1 > 0) {
  if (firstAnswer == secondAnswer || firstAnswer == thirdAnswer || firstAnswer == fourthAnswer || secondAnswer == thirdAnswer || secondAnswer == fourthAnswer || thirdAnswer == fourthAnswer) {
    secondAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
    thirdAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
    fourthAnswer = choice[Math.floor(Math.random() * choice.length)].romaji;
  } else break;
}

console.log(firstAnswer);


$(document).ready(() => {
  $(".question").html("WHAT IS THE PRONOUNCIATION OF " + correctAnswer.hiragana);

  $("#1st-answer").html(firstAnswer);
  $("#2nd-answer").html(secondAnswer);
  $("#3rd-answer").html(thirdAnswer);
  $("#4th-answer").html(fourthAnswer);

  if (firstAnswer == correctAnswer.romaji) {
    $("#1st-answer").on('click', () => {
      $(".answer").not("#1st-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#1st-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    })
  }

  if (secondAnswer == correctAnswer.romaji) {
    $("#2nd-answer").on('click', () => {
      $(".answer").not("#2nd-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#2nd-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });

  }
  if (thirdAnswer == correctAnswer.romaji) {
    $("#3rd-answer").on('click', () => {
      $(".answer").not("#3rd-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#3rd-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });
  }

  if (fourthAnswer == correctAnswer.romaji) {
    $("#4th-answer").on('click', () => {
      $(".answer").not("#4th-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#4th-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });
  }

});
