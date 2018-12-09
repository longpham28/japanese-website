let japaneseList = ["私（わたし）", "僕（ぼく）", "貴方（あなた）", "彼（かれ）", "彼女（かのじょ）", "私たち（わたしたち）", "これ", "ここ", "この", "それ", "そこ", "その", "あれ", "あそこ", "あの"];

let englishList = ["I", "I (male,normal)", "You", "He/Him", "She/Her", "We/Us", "This", "Here", "This (pre-noun adj)", "That (near the listener)", "There (near the listener)", "That (pre-noun adj, near the listener)", "That (far from both speaker and listener)", "There (far from both speaker and listener)", "That (pre-noun adj, far from both speaker and listener)"];

class quiz {
  constructor() {
    this.japanese = "";
    this.english = "";
  }

  getCharacters() {
    this.japanese = japaneseList[Math.floor(Math.random() * japaneseList.length)];
    this.english = englishList[japaneseList.indexOf(this.japanese)];
  }
};

const getAnswers = (answer) => {
  answer.getCharacters();
  japaneseList.splice(japaneseList.indexOf(answer.japanese), 1);
  englishList.splice(englishList.indexOf(answer.english), 1);
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

choices = [correctAnswer.english, wrongAnswer1.english, wrongAnswer2.english, wrongAnswer3.english];

function getRandomAnswers() {
  for (let i = choices.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[rand]] = [choices[rand], choices[i]]
  }

}

$(document).ready(() => {
  const outPut = () => {
    getRandomAnswers();
    $(".question").html("WHAT IS THE MEANING OF " + correctAnswer.japanese);
    $("#1st-answer").html(choices[0]);
    $("#2nd-answer").html(choices[1]);
    $("#3rd-answer").html(choices[2]);
    $("#4th-answer").html(choices[3]);

    $('.answer').each((index, element) => {
      if ($(element).text() === correctAnswer.english) {
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
