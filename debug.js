const a = "あ";
const b = String.fromCharCode(a.charCodeAt(0) + 52991);
$(document).ready(() => {
  $(".test").html(b);
});
