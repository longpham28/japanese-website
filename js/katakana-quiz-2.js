let katakanaList = ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ", "キャ", "キュ", "キョ", "シャ", "シュ", "ショ", "チャ", "チュ", "チョ", "ニャ", "ニュ", "ニョ", "ヒャ", "ヒュ", "ヒョ", "ミャ", "ミュ", "ミョ", "リャ", "リュ", "リョ", "ギャ", "ギュ", "ギョ", "ジャ", "ジュ", "ジョ", "ビャ", "ビュ", "ビョ", "ピャ", "ピュ", "ピョ"];

let romajiList = ["ga", "gi", "gu", "ge", "go", "za", "ji", "zu", "ze", "zo", "da", "di", "du", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po", "kya", "kyu", "kyo", "sha", "shu", "sho", "cha", "chu", "cho", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "mya", "myu", "myo", "rya", "ryu", "ryo", "gya", "gyu", "gyo", "ja", "ju", "jo", "bya", "byu", "byo", "pya", "pyu", "pyo"];

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
  $(".question").html("WHAT IS THE PRONOUNCIATION OF " + correctAnswer.katakana);

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