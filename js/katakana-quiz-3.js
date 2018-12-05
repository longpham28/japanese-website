let katakanaList = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];

let romajiList = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];

class quiz {
  constructor() {
    this.katakana = "";
    this.romaji = "";
  }

  getCharacters() {
    this.katakana = katakanaList[Math.floor(Math.random() * katakanaList.length)];
    this.romaji = romajiList[katakanaList.indexOf(this.katakana)];
  }
};

const getAnswers = (answer) => {
  answer.getCharacters();
  katakanaList.splice(katakanaList.indexOf(answer.katakana), 1);
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
    $(".question").html("HOW DO WE WRITE [" + correctAnswer.romaji + "]");
    $("#1st-answer").html(choices[0]);
    $("#2nd-answer").html(choices[1]);
    $("#3rd-answer").html(choices[2]);
    $("#4th-answer").html(choices[3]);

    $('.answer').each((index, element) => {
      if ($(element).text() === correctAnswer.katakana) {
        $(element).on('click', () => {
          $(".answer").addClass("deactive");
          $(".answer").off('click');
          $(".answer").not($(element)).html("");
          $(".judgment").css({
            "background-color": "#222233",
            "color": "white "
          })
          $(".judgment").html("CORRECT ANSWER!");
          $(".judgment").show();
          $(".next-question").fadeIn();
        })
      } else {
        $(element).on('click', () => {
          $(element).html("");
          $(".judgment").css({
            "color": "white",
            "background-color": "red"
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
