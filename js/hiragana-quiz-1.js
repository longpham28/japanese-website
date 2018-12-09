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

const getAnswers = (answer) => {
  answer.getCharacters();
  hiraganaList.splice(hiraganaList.indexOf(answer.hiragana), 1);
  romajiList.splice(romajiList.indexOf(answer.romaji), 1);
}

let correctAnswer = new quiz();
let wrongAnswer1 = new quiz();
let wrongAnswer2 = new quiz();
let wrongAnswer3 = new quiz();

getAnswers(correctAnswer);
getAnswers(wrongAnswer1);
getAnswers(wrongAnswer2);
getAnswers(wrongAnswer3);

let choices = [];

choices = [correctAnswer.romaji, wrongAnswer1.romaji, wrongAnswer2.romaji, wrongAnswer3.romaji];

function getRandomAnswers() {
  for (let i = choices.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[rand]] = [choices[rand], choices[i]]
  }

}

$(document).ready(() => {
  const outPut = () => {
    getRandomAnswers();
    $(".question").html("WHAT IS THE PRONOUNCIATION OF " + correctAnswer.hiragana);
    $("#1st-answer").html(choices[0]);
    $("#2nd-answer").html(choices[1]);
    $("#3rd-answer").html(choices[2]);
    $("#4th-answer").html(choices[3]);

    $('.answer').each((index, element) => {
      if ($(element).text() === correctAnswer.romaji) {
        $(element).on('click', () => {
          $(".answer").addClass("deactive");
          $(".answer").off('click');
          $(".answer").not($(element)).html("");
          $(".judgment").css({
            "background-color": "#D32F2F",
            "color": "#FFFFFF "
          })
          $(".judgment").html("CORRECT ANSWER!");
          $(".judgment").show();
          $(".next-question").fadeIn();
        })
      } else {
        $(element).on('click', () => {
          $(element).html("");
          $(".judgment").css({
            "color": "#FFFFFF",
            "background-color": "#FFC107"
          });
          $(".judgment").html("WRONG ANSWER!");
          $(".judgment").show();
        })
      }
    })
  }
  outPut();

  $(".next-question").on('click', () => {
    location.reload()
  });
});
