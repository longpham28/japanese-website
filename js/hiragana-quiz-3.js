let hiraganaList = ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "きゃ", "きゅ", "きょ", "しゃ", "しゅ", "しょ", "ちゃ", "ちゅ", "ちょ", "にゃ", "にゅ", "にょ", "ひゃ", "ひゅ", "ひょ", "みゃ", "みゅ", "みょ", "りゃ", "りゅ", "りょ", "ぎゃ", "ぎゅ", "ぎょ", "じゃ", "じゅ", "じょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ"];

let romajiList = ["ga", "gi", "gu", "ge", "go", "za", "ji", "zu", "ze", "zo", "da", "di", "du", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po", "kya", "kyu", "kyo", "sha", "shu", "sho", "cha", "chu", "cho", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "mya", "myu", "myo", "rya", "ryu", "ryo", "gya", "gyu", "gyo", "ja", "ju", "jo", "bya", "byu", "byo", "pya", "pyu", "pyo"];
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

let firstAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
let secondAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
let thirdAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
let fourthAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;

while (1 > 0) {
  if (firstAnswer == secondAnswer || firstAnswer == thirdAnswer || firstAnswer == fourthAnswer || secondAnswer == thirdAnswer || secondAnswer == fourthAnswer || thirdAnswer == fourthAnswer) {
    secondAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
    thirdAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
    fourthAnswer = choice[Math.floor(Math.random() * choice.length)].hiragana;
  } else break;
}

console.log(firstAnswer);


$(document).ready(() => {
  $(".question").html("HOW DO WE WRITE [" + correctAnswer.romaji + "] IN JAPANESE");

  $("#1st-answer").html(firstAnswer);
  $("#2nd-answer").html(secondAnswer);
  $("#3rd-answer").html(thirdAnswer);
  $("#4th-answer").html(fourthAnswer);

  if (firstAnswer == correctAnswer.hiragana) {
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

  if (secondAnswer == correctAnswer.hiragana) {
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
  if (thirdAnswer == correctAnswer.hiragana) {
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

  if (fourthAnswer == correctAnswer.hiragana) {
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
