let $character = ["ohayou", "ohayougozaimasu", "konnichiha", "konbanha", "oyasuminasai", "arigatou", "arigatougozaimasu", "gomennasai", "sumimasen", "hai", "iie", ];

const speakChar = char => {
  $("#" + char + "-audio").get(0).play();
}

$(document).ready(() => {
  $.each($character, function (i, val) {
    $("#" + val).on('click', function () {
      speakChar(val);
    });
  });

});
