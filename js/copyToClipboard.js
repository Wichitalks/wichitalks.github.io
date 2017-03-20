// This code was taken from https://codepen.io/shaikmaqsood/pen/XmydxJ/
// Thank you!

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}