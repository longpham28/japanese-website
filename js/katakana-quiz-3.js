let katakanaList = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];

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

    if (choices[0] == correctAnswer.romaji) {
      $("#1st-answer").on('click', () => {
        $(".answer").addClass("deactive");
        $(".answer").off('click');
        $(".answer").not("#1st-answer").html("");
        $(".judgment").css({
          "background-color": "#222233",
          "color": "white "
        })
        $(".judgment").html("CORRECT ANSWER!");
        $(".judgment").show();
        $(".next-question").fadeIn();
      });
      $(".answer").not("#1st-answer").on('click', (event) => {
        $(event.currentTarget).html("");
        $(".judgment").css({
          "color": "white",
          "background-color": "red"
        });
        $(".judgment").html("WRONG ANSWER!");
        $(".judgment").show();
      })
    }

    if (choices[1] == correctAnswer.romaji) {
      $("#2nd-answer").on('click', () => {
        $(".answer").addClass("deactive");
        $(".answer").off('click');
        $(".answer").not("#2nd-answer").html("");
        $(".judgment").css({
          "background-color": "#222233",
          "color": "white "
        })
        $(".judgment").html("CORRECT ANSWER!");
        $(".judgment").show();
        $(".next-question").fadeIn();
      });
      $(".answer").not("#2nd-answer").on('click', (event) => {
        $(event.currentTarget).html("");
        $(".judgment").css({
          "color": "white",
          "background-color": "red"
        });
        $(".judgment").html("WRONG ANSWER!");
        $(".judgment").show();
      });

    }
    if (choices[2] == correctAnswer.romaji) {
      $("#3rd-answer").on('click', () => {
        $(".answer").addClass("deactive");
        $(".answer").off('click');
        $(".answer").not("#3rd-answer").html("");
        $(".judgment").css({
          "background-color": "#222233",
          "color": "white "
        })
        $(".judgment").html("CORRECT ANSWER!");
        $(".judgment").show();
        $(".next-question").fadeIn();
      });
      $(".answer").not("#3rd-answer").on('click', (event) => {
        $(event.currentTarget).html("");
        $(".judgment").css({
          "color": "white",
          "background-color": "red"
        });
        $(".judgment").html("WRONG ANSWER!");
        $(".judgment").show();
      });
    }

    if (choices[3] == correctAnswer.romaji) {
      $("#4th-answer").on('click', () => {
        $(".answer").addClass("deactive");
        $(".answer").off('click');
        $(".answer").not("#4th-answer").html("");
        $(".judgment").css({
          "background-color": "#222233",
          "color": "white "
        })
        $(".judgment").html("CORRECT ANSWER!");
        $(".judgment").show();
        $(".next-question").fadeIn();
      });
      $(".answer").not("#4th-answer").on('click', (event) => {
        $(event.currentTarget).html("");
        $(".judgment").css({
          "color": "white",
          "background-color": "red"
        });
        $(".judgment").html("WRONG ANSWER!");
        $(".judgment").show();
      });
    }
  }

  outPut();

  $(".next-question").on('click', () => {
    location.reload()
  });
});
