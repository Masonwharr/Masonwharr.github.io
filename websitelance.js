$(document).ready(function(){
var scroll = document.getElementById('top');
var section = document.getElementsByClassName('infodiv');
$(scroll).click(function(){
$('html, body').animate({
scrollTop: $(section).offset().top
}, 'slow');
});
});
