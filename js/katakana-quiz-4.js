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

choices = [correctAnswer.katakana, wrongAnswer1.katakana, wrongAnswer2.katakana, wrongAnswer3.katakana];

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
