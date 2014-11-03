// ==UserScript==
// @name        addFontSzie
// @namespace   test
// @include     https://wx.qq.com/
// @exclude    
// @version     1
// @grant       none
// ==/UserScript==
var fontSize = 30;
var tempFontSize;
function hideDialog() {
  $('#fontDialog').hide();
}
function showDialog() {
  $('#fontDialog').show();
}
$('.chatInput').css('font-size', '36px');
$('.chatSend').on('click.carey', function () {
  $('pre').css('font-size', fontSize + 'px');
});
$('#textInput').on('keyup.carey', function (event) {
  if (event.which == 13) {
    $('pre').css('font-size', fontSize + 'px');
  }
});
$(document).ajaxComplete(function () {
  $('pre').css('font-size', fontSize + 'px');
});
$('#container').append('<div id="yuteng"><p style="position:fixed;bottom:100px;right:25px;"><a href=\'javascript:void(0)\' style=\'font-size:25px; color:yellow\'>Set font size</p></a></div>');
$('#container').append('<div id="fontDialog" style="background-color:white;position:fixed;bottom:200px;right:250px;"><p class="change_size_p" style="font-size:10px;cursor:pointer">10</p><p class="change_size_p" style="font-size:20px;cursor:pointer">20</p><p class="change_size_p" style="font-size:30px;cursor:pointer">30</p><p class="change_size_p" style="font-size:40px;cursor:pointer">40</p><button id="change_yuteng">sure</button><button id="cancel_yuteng">cancel</button></div>');
$('#cancel_yuteng').on('click', function () {
  hideDialog();
})
$('#change_yuteng').on('click', function () {
  fontSize = tempFontSize;
  hideDialog();
})
hideDialog();
$('#yuteng').on('click', function () {
  showDialog();
  $('.chatSend').off('click.carey');
  $('#textInput').off('keyup.carey');
  $('.change_size_p').on('click', function () {
    tempFontSize = $(this).text();
  })
})
