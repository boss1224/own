$(document).ready(function(){
$('a[href="#services"],a[href="#gallery"],a[href="#pricing"]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});